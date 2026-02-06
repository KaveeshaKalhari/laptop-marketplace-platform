import { Store, Laptop, FileText, Star, TrendingUp } from 'lucide-react';
import { StatsCard } from './StatsCard';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts';

const brandData = [
  { name: 'HP', value: 45 },
  { name: 'Dell', value: 38 },
  { name: 'ASUS', value: 32 },
  { name: 'Lenovo', value: 28 },
  { name: 'Acer', value: 22 },
  { name: 'MSI', value: 18 },
];

const categoryData = [
  { name: 'Student', value: 85, color: '#3b82f6' },
  { name: 'Business', value: 62, color: '#6b7280' },
  { name: 'Gaming', value: 36, color: '#ef4444' },
];

const recentUpdates = [
  { id: 1, shop: 'Tech Corner', laptop: 'HP Pavilion 14', action: 'Added', time: '2 hours ago' },
  { id: 2, shop: 'Laptop World', laptop: 'ASUS TUF Gaming', action: 'Updated', time: '4 hours ago' },
  { id: 3, shop: 'Digital Zone', laptop: 'Dell Inspiron 15', action: 'Price Changed', time: '5 hours ago' },
  { id: 4, shop: 'Gaming Depot', laptop: 'MSI Katana GF66', action: 'Added', time: '1 day ago' },
];

const recentReviews = [
  { id: 1, user: 'Kasun Perera', shop: 'Tech Corner', rating: 5, comment: 'Excellent service and great prices...', time: '1 hour ago' },
  { id: 2, user: 'Sithara Fernando', shop: 'Laptop World', rating: 4, comment: 'Good selection of laptops...', time: '3 hours ago' },
  { id: 3, user: 'Rajitha Silva', shop: 'Digital Zone', rating: 5, comment: 'Best laptop shop in Unity Plaza...', time: '6 hours ago' },
];

const COLORS = categoryData.map(item => item.color);

export function AdminDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Shops"
          value="6"
          icon={Store}
          color="blue"
          trend={{ value: '+2 this month', positive: true }}
        />
        <StatsCard
          title="Total Laptops"
          value="183"
          icon={Laptop}
          color="green"
          trend={{ value: '+12 this week', positive: true }}
        />
        <StatsCard
          title="Active Listings"
          value="176"
          icon={FileText}
          color="purple"
        />
        <StatsCard
          title="Total Reviews"
          value="487"
          icon={Star}
          color="orange"
          trend={{ value: '+23 this week', positive: true }}
        />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Brand Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-900 text-lg">Laptop Brand Distribution</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={brandData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#fff', 
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                  fontSize: '14px'
                }} 
              />
              <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-bold text-gray-900 text-lg">Popular Categories</h2>
            <TrendingUp className="w-5 h-5 text-gray-400" />
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${((percent ?? 0) * 100).toFixed(0)}%`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
              >
                {categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Laptop Updates */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-4">Recent Laptop Updates</h2>
          <div className="space-y-3">
            {recentUpdates.map((update) => (
              <div key={update.id} className="flex items-center justify-between py-3 border-b border-gray-100 last:border-0">
                <div className="flex-1">
                  <div className="font-medium text-gray-900">{update.laptop}</div>
                  <div className="text-sm text-gray-500">{update.shop}</div>
                </div>
                <div className="text-right">
                  <span className={`inline-block px-2 py-1 text-xs rounded-full ${
                    update.action === 'Added' ? 'bg-green-50 text-green-600' :
                    update.action === 'Updated' ? 'bg-blue-50 text-blue-600' :
                    'bg-orange-50 text-orange-600'
                  }`}>
                    {update.action}
                  </span>
                  <div className="text-xs text-gray-500 mt-1">{update.time}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Latest Reviews */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="font-bold text-gray-900 text-lg mb-4">Latest Reviews</h2>
          <div className="space-y-3">
            {recentReviews.map((review) => (
              <div key={review.id} className="py-3 border-b border-gray-100 last:border-0">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <div className="font-medium text-gray-900 text-sm">{review.user}</div>
                    <div className="text-xs text-gray-500">{review.shop}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm font-medium">{review.rating}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-2">{review.comment}</p>
                <div className="text-xs text-gray-500 mt-1">{review.time}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}