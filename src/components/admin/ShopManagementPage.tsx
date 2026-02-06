import { useState } from 'react';
import { Plus, Edit, CheckCircle, XCircle, Search, MapPin, Phone } from 'lucide-react';
import { Modal } from './Modal';

interface Shop {
  id: number;
  name: string;
  floor: number;
  unit: string;
  brands: string[];
  status: 'active' | 'pending' | 'inactive';
  phone: string;
  email: string;
  owner: string;
}

const initialShops: Shop[] = [
  {
    id: 1,
    name: 'Tech Corner',
    floor: 2,
    unit: 'A-23',
    brands: ['HP', 'Dell', 'Lenovo'],
    status: 'active',
    phone: '+94 77 123 4567',
    email: 'info@techcorner.lk',
    owner: 'Kasun Perera'
  },
  {
    id: 2,
    name: 'Laptop World',
    floor: 1,
    unit: 'B-15',
    brands: ['ASUS', 'Acer', 'MSI'],
    status: 'active',
    phone: '+94 77 234 5678',
    email: 'contact@laptopworld.lk',
    owner: 'Sithara Fernando'
  },
  {
    id: 3,
    name: 'Digital Zone',
    floor: 3,
    unit: 'C-12',
    brands: ['HP', 'ASUS', 'MSI'],
    status: 'pending',
    phone: '+94 77 345 6789',
    email: 'info@digitalzone.lk',
    owner: 'Rajitha Silva'
  },
];

export function ShopManagementPage() {
  const [shops, setShops] = useState<Shop[]>(initialShops);
  const [searchQuery, setSearchQuery] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingShop, setEditingShop] = useState<Shop | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    floor: 1,
    unit: '',
    brands: '',
    phone: '',
    email: '',
    owner: '',
  });

  const filteredShops = shops.filter(shop =>
    shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    shop.owner.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = () => {
    setEditingShop(null);
    setFormData({
      name: '',
      floor: 1,
      unit: '',
      brands: '',
      phone: '',
      email: '',
      owner: '',
    });
    setIsModalOpen(true);
  };

  const handleEdit = (shop: Shop) => {
    setEditingShop(shop);
    setFormData({
      name: shop.name,
      floor: shop.floor,
      unit: shop.unit,
      brands: shop.brands.join(', '),
      phone: shop.phone,
      email: shop.email,
      owner: shop.owner,
    });
    setIsModalOpen(true);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const brandsArray = formData.brands.split(',').map(b => b.trim()).filter(Boolean);
    
    if (editingShop) {
      setShops(shops.map(shop =>
        shop.id === editingShop.id
          ? { ...shop, ...formData, brands: brandsArray }
          : shop
      ));
    } else {
      const newShop: Shop = {
        id: Math.max(...shops.map(s => s.id)) + 1,
        ...formData,
        brands: brandsArray,
        status: 'pending',
      };
      setShops([...shops, newShop]);
    }
    setIsModalOpen(false);
  };

  const toggleStatus = (id: number) => {
    setShops(shops.map(shop =>
      shop.id === id
        ? { ...shop, status: shop.status === 'active' ? 'inactive' : 'active' }
        : shop
    ));
  };

  const approveShop = (id: number) => {
    setShops(shops.map(shop =>
      shop.id === id ? { ...shop, status: 'active' } : shop
    ));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop Management</h1>
          <p className="text-gray-600 mt-1">Manage all shops at Unity Plaza</p>
        </div>
        <button
          onClick={handleAdd}
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          <Plus className="w-5 h-5" />
          Add Shop
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search shops or owners..."
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
                  Shop Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Brands
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Owner
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
              {filteredShops.map((shop) => (
                <tr key={shop.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{shop.name}</div>
                    <div className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                      <Phone className="w-3 h-3" />
                      {shop.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1 text-gray-700">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      Floor {shop.floor}, Unit {shop.unit}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {shop.brands.map((brand) => (
                        <span
                          key={brand}
                          className="px-2 py-1 bg-cyan-50 text-cyan-600 rounded text-xs font-medium"
                        >
                          {brand}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-gray-700">{shop.owner}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        shop.status === 'active'
                          ? 'bg-green-50 text-green-700'
                          : shop.status === 'pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {shop.status === 'active' && <CheckCircle className="w-3 h-3" />}
                      {shop.status === 'inactive' && <XCircle className="w-3 h-3" />}
                      {shop.status.charAt(0).toUpperCase() + shop.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {shop.status === 'pending' && (
                        <button
                          onClick={() => approveShop(shop.id)}
                          className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded hover:bg-green-100 transition"
                        >
                          Approve
                        </button>
                      )}
                      <button
                        onClick={() => handleEdit(shop)}
                        className="p-2 text-gray-600 hover:text-blue-600 hover:bg-gray-100 rounded transition"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => toggleStatus(shop.id)}
                        className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition"
                      >
                        {shop.status === 'active' ? (
                          <XCircle className="w-4 h-4" />
                        ) : (
                          <CheckCircle className="w-4 h-4" />
                        )}
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
        title={editingShop ? 'Edit Shop' : 'Add New Shop'}
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Shop Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Floor
              </label>
              <input
                type="number"
                value={formData.floor}
                onChange={(e) => setFormData({ ...formData, floor: parseInt(e.target.value) })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
                min="1"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Unit
              </label>
              <input
                type="text"
                value={formData.unit}
                onChange={(e) => setFormData({ ...formData, unit: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brands (comma-separated)
            </label>
            <input
              type="text"
              value={formData.brands}
              onChange={(e) => setFormData({ ...formData, brands: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="HP, Dell, Lenovo"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Owner Name
            </label>
            <input
              type="text"
              value={formData.owner}
              onChange={(e) => setFormData({ ...formData, owner: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
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
              {editingShop ? 'Update' : 'Add'} Shop
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}