import { useState } from 'react';
import { Plus, Edit, Trash2, Tag } from 'lucide-react';
import { Modal } from './Modal';

interface Brand {
  id: number;
  name: string;
  laptopCount: number;
  active: boolean;
}

interface Category {
  id: number;
  name: string;
  description: string;
  laptopCount: number;
  active: boolean;
}

const initialBrands: Brand[] = [
  { id: 1, name: 'HP', laptopCount: 45, active: true },
  { id: 2, name: 'Dell', laptopCount: 38, active: true },
  { id: 3, name: 'ASUS', laptopCount: 32, active: true },
  { id: 4, name: 'Lenovo', laptopCount: 28, active: true },
  { id: 5, name: 'Acer', laptopCount: 22, active: true },
  { id: 6, name: 'MSI', laptopCount: 18, active: true },
];

const initialCategories: Category[] = [
  { id: 1, name: 'Student', description: 'Affordable laptops for students', laptopCount: 85, active: true },
  { id: 2, name: 'Business', description: 'Professional laptops for business use', laptopCount: 62, active: true },
  { id: 3, name: 'Gaming', description: 'High-performance gaming laptops', laptopCount: 36, active: true },
];

export function BrandCategoryManagementPage() {
  const [brands, setBrands] = useState<Brand[]>(initialBrands);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const [isCategoryModalOpen, setIsCategoryModalOpen] = useState(false);
  const [editingBrand, setEditingBrand] = useState<Brand | null>(null);
  const [editingCategory, setEditingCategory] = useState<Category | null>(null);
  const [brandFormData, setBrandFormData] = useState({ name: '' });
  const [categoryFormData, setCategoryFormData] = useState({ name: '', description: '' });

  // Brand Handlers
  const handleAddBrand = () => {
    setEditingBrand(null);
    setBrandFormData({ name: '' });
    setIsBrandModalOpen(true);
  };

  const handleEditBrand = (brand: Brand) => {
    setEditingBrand(brand);
    setBrandFormData({ name: brand.name });
    setIsBrandModalOpen(true);
  };

  const handleBrandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBrand) {
      setBrands(brands.map(b => b.id === editingBrand.id ? { ...b, name: brandFormData.name } : b));
    } else {
      const newBrand: Brand = {
        id: Math.max(...brands.map(b => b.id)) + 1,
        name: brandFormData.name,
        laptopCount: 0,
        active: true,
      };
      setBrands([...brands, newBrand]);
    }
    setIsBrandModalOpen(false);
  };

  const handleDeleteBrand = (id: number) => {
    if (confirm('Are you sure you want to delete this brand?')) {
      setBrands(brands.filter(b => b.id !== id));
    }
  };

  const toggleBrandStatus = (id: number) => {
    setBrands(brands.map(b => b.id === id ? { ...b, active: !b.active } : b));
  };

  // Category Handlers
  const handleAddCategory = () => {
    setEditingCategory(null);
    setCategoryFormData({ name: '', description: '' });
    setIsCategoryModalOpen(true);
  };

  const handleEditCategory = (category: Category) => {
    setEditingCategory(category);
    setCategoryFormData({ name: category.name, description: category.description });
    setIsCategoryModalOpen(true);
  };

  const handleCategorySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(categories.map(c =>
        c.id === editingCategory.id
          ? { ...c, name: categoryFormData.name, description: categoryFormData.description }
          : c
      ));
    } else {
      const newCategory: Category = {
        id: Math.max(...categories.map(c => c.id)) + 1,
        name: categoryFormData.name,
        description: categoryFormData.description,
        laptopCount: 0,
        active: true,
      };
      setCategories([...categories, newCategory]);
    }
    setIsCategoryModalOpen(false);
  };

  const handleDeleteCategory = (id: number) => {
    if (confirm('Are you sure you want to delete this category?')) {
      setCategories(categories.filter(c => c.id !== id));
    }
  };

  const toggleCategoryStatus = (id: number) => {
    setCategories(categories.map(c => c.id === id ? { ...c, active: !c.active } : c));
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Brand & Category Management</h1>
        <p className="text-gray-600 mt-1">Manage laptop brands and categories</p>
      </div>

      {/* Brands Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Brands</h2>
          <button
            onClick={handleAddBrand}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" />
            Add Brand
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center">
                    <Tag className="w-6 h-6 text-cyan-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{brand.name}</h3>
                    <p className="text-sm text-gray-500">{brand.laptopCount} laptops</p>
                  </div>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    brand.active
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {brand.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditBrand(brand)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => toggleBrandStatus(brand.id)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  {brand.active ? 'Disable' : 'Enable'}
                </button>
                <button
                  onClick={() => handleDeleteBrand(brand.id)}
                  className="px-3 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Categories Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-900">Categories</h2>
          <button
            onClick={handleAddCategory}
            className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-4 h-4" />
            Add Category
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{category.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{category.description}</p>
                  <p className="text-sm text-gray-500">{category.laptopCount} laptops</p>
                </div>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    category.active
                      ? 'bg-green-50 text-green-700'
                      : 'bg-gray-50 text-gray-700'
                  }`}
                >
                  {category.active ? 'Active' : 'Inactive'}
                </span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditCategory(category)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  <Edit className="w-4 h-4 inline mr-1" />
                  Edit
                </button>
                <button
                  onClick={() => toggleCategoryStatus(category.id)}
                  className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg hover:bg-gray-50 transition"
                >
                  {category.active ? 'Disable' : 'Enable'}
                </button>
                <button
                  onClick={() => handleDeleteCategory(category.id)}
                  className="px-3 py-2 text-sm text-red-600 border border-red-300 rounded-lg hover:bg-red-50 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Brand Modal */}
      <Modal
        isOpen={isBrandModalOpen}
        onClose={() => setIsBrandModalOpen(false)}
        title={editingBrand ? 'Edit Brand' : 'Add New Brand'}
      >
        <form onSubmit={handleBrandSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Name
            </label>
            <input
              type="text"
              value={brandFormData.name}
              onChange={(e) => setBrandFormData({ name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Samsung"
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsBrandModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingBrand ? 'Update' : 'Add'} Brand
            </button>
          </div>
        </form>
      </Modal>

      {/* Category Modal */}
      <Modal
        isOpen={isCategoryModalOpen}
        onClose={() => setIsCategoryModalOpen(false)}
        title={editingCategory ? 'Edit Category' : 'Add New Category'}
      >
        <form onSubmit={handleCategorySubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category Name
            </label>
            <input
              type="text"
              value={categoryFormData.name}
              onChange={(e) => setCategoryFormData({ ...categoryFormData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Creator"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Description
            </label>
            <textarea
              value={categoryFormData.description}
              onChange={(e) => setCategoryFormData({ ...categoryFormData, description: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Brief description of this category"
              rows={3}
              required
            />
          </div>
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsCategoryModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingCategory ? 'Update' : 'Add'} Category
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}