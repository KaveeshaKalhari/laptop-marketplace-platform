import { useState } from 'react';
import { Plus, Edit, Trash2, Search, CheckCircle, XCircle } from 'lucide-react';
import { Modal } from './Modal';
//import { ImageWithFallback } from '../figma/ImageWithFallback';

interface Laptop {
  id: number;
  brand: string;
  model: string;
  processor: string;
  ram: string;
  storage: string;
  price: number;
  shopId: number;
  shopName: string;
  type: string;
  status: 'active' | 'inactive';
  image: string;
}

const initialLaptops: Laptop[] = [
  { id: 1, brand: 'HP', model: '15s-fq5007TU', processor: 'Intel Core i5-1235U', ram: '8GB', storage: '512GB SSD', price: 145000, shopId: 1, shopName: 'Tech Corner', type: 'Business', status: 'active', image: 'laptop hp business' },
  { id: 2, brand: 'Dell', model: 'Inspiron 15 3520', processor: 'Intel Core i5-1235U', ram: '8GB', storage: '512GB SSD', price: 155000, shopId: 1, shopName: 'Tech Corner', type: 'Business', status: 'active', image: 'laptop dell office' },
  { id: 3, brand: 'ASUS', model: 'VivoBook 15', processor: 'Intel Core i5-1235U', ram: '8GB', storage: '512GB SSD', price: 148000, shopId: 2, shopName: 'Laptop World', type: 'Student', status: 'active', image: 'laptop asus vivobook' },
  { id: 4, brand: 'MSI', model: 'GF63 Thin', processor: 'Intel Core i5-11400H', ram: '16GB', storage: '512GB SSD', price: 225000, shopId: 2, shopName: 'Laptop World', type: 'Gaming', status: 'active', image: 'laptop msi gaming' },
];

export function LaptopManagementPage() {
  const [laptops, setLaptops] = useState<Laptop[]>(initialLaptops);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingLaptop, setEditingLaptop] = useState<Laptop | null>(null);
  const [formData, setFormData] = useState({
    brand: '',
    model: '',
    processor: '',
    ram: '',
    storage: '',
    price: '',
    shopId: 1,
    type: 'Student',
  });

  const filteredLaptops = laptops.filter(laptop =>
    laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
    laptop.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
    laptop.shopName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = () => {
    setEditingLaptop(null);
    setFormData({
      brand: '',
      model: '',
      processor: '',
      ram: '',
      storage: '',
      price: '',
      shopId: 1,
      type: 'Student',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (laptop: Laptop) => {
    setEditingLaptop(laptop);
    setFormData({
      brand: laptop.brand,
      model: laptop.model,
      processor: laptop.processor,
      ram: laptop.ram,
      storage: laptop.storage,
      price: laptop.price.toString(),
      shopId: laptop.shopId,
      type: laptop.type,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingLaptop) {
      setLaptops(laptops.map(laptop =>
        laptop.id === editingLaptop.id
          ? {
              ...laptop,
              ...formData,
              price: parseInt(formData.price),
              shopName: laptops.find(l => l.shopId === formData.shopId)?.shopName || 'Unknown Shop',
            }
          : laptop
      ));
    } else {
      const newLaptop: Laptop = {
        id: Math.max(...laptops.map(l => l.id)) + 1,
        ...formData,
        price: parseInt(formData.price),
        shopName: laptops.find(l => l.shopId === formData.shopId)?.shopName || 'Unknown Shop',
        status: 'active',
        image: `laptop ${formData.brand.toLowerCase()} ${formData.type.toLowerCase()}`,
      };
      setLaptops([...laptops, newLaptop]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this laptop?')) {
      setLaptops(laptops.filter(laptop => laptop.id !== id));
    }
  };

  const toggleStatus = (id: number) => {
    setLaptops(laptops.map(laptop =>
      laptop.id === id
        ? { ...laptop, status: laptop.status === 'active' ? 'inactive' : 'active' }
        : laptop
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Laptop Management</h1>
          <p className="text-gray-600 mt-1">Manage all laptop listings</p>
        </div>
        <button
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          Add Laptop
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search laptops by brand, model, or shop..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brand & Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Specs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Shop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Price
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredLaptops.map((laptop) => (
                <tr key={laptop.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    {/*<ImageWithFallback*/}
                    {/*  src={`https://source.unsplash.com/200x150/?${encodeURIComponent(laptop.image)}`}*/}
                    {/*  alt={`${laptop.brand} ${laptop.model}`}*/}
                    {/*  className="w-16 h-12 object-cover rounded"*/}
                    {/*/>*/}
                  </td>
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{laptop.brand}</div>
                    <div className="text-sm text-gray-500">{laptop.model}</div>
                    <span className="inline-block mt-1 px-2 py-0.5 bg-cyan-50 text-cyan-600 rounded text-xs">
                      {laptop.type}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-700">{laptop.processor}</div>
                    <div className="text-sm text-gray-500">{laptop.ram} RAM</div>
                    <div className="text-sm text-gray-500">{laptop.storage}</div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{laptop.shopName}</td>
                  <td className="px-6 py-4">
                    <div className="font-semibold text-gray-900">
                      LKR {laptop.price.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        laptop.status === 'active'
                          ? 'bg-green-50 text-green-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {laptop.status === 'active' ? (
                        <CheckCircle className="w-3 h-3" />
                      ) : (
                        <XCircle className="w-3 h-3" />
                      )}
                      {laptop.status.charAt(0).toUpperCase() + laptop.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button
                        onClick={() => handleEdit(laptop)}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleStatus(laptop.id)}
                        className="p-2 text-gray-600 hover:text-orange-600 hover:bg-gray-100 rounded transition"
                      >
                        {laptop.status === 'active' ? (
                          <XCircle className="w-4 h-4" />
                        ) : (
                          <CheckCircle className="w-4 h-4" />
                        )}
                      </button>
                      <button
                        onClick={() => handleDelete(laptop.id)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Add/Edit Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingLaptop ? 'Edit Laptop' : 'Add New Laptop'}
        maxWidth="lg"
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand
              </label>
              <select
                value={formData.brand}
                onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select Brand</option>
                <option value="HP">HP</option>
                <option value="Dell">Dell</option>
                <option value="Lenovo">Lenovo</option>
                <option value="ASUS">ASUS</option>
                <option value="Acer">Acer</option>
                <option value="MSI">MSI</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Type
              </label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="Student">Student</option>
                <option value="Business">Business</option>
                <option value="Gaming">Gaming</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model
            </label>
            <input
              type="text"
              value={formData.model}
              onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Processor
            </label>
            <input
              type="text"
              value={formData.processor}
              onChange={(e) => setFormData({ ...formData, processor: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Intel Core i5-1235U"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                RAM
              </label>
              <input
                type="text"
                value={formData.ram}
                onChange={(e) => setFormData({ ...formData, ram: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 8GB"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Storage
              </label>
              <input
                type="text"
                value={formData.storage}
                onChange={(e) => setFormData({ ...formData, storage: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 512GB SSD"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Price (LKR)
              </label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                min="0"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Shop
              </label>
              <select
                value={formData.shopId}
                onChange={(e) => setFormData({ ...formData, shopId: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value={1}>Tech Corner</option>
                <option value={2}>Laptop World</option>
                <option value={3}>Digital Zone</option>
              </select>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              {editingLaptop ? 'Update' : 'Add'} Laptop
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}