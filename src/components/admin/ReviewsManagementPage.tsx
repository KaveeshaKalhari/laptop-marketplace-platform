import { useState } from 'react';
import { Search, CheckCircle, Eye, EyeOff, Star } from 'lucide-react';

interface Review {
  id: number;
  user: string;
  shop: string;
  shopId: number;
  rating: number;
  comment: string;
  date: string;
  status: 'approved' | 'pending' | 'hidden';
}

const initialReviews: Review[] = [
  { id: 1, user: 'Kasun Perera', shop: 'Tech Corner', shopId: 1, rating: 5, comment: 'Excellent service and great prices. Highly recommended!', date: '2024-01-15', status: 'approved' },
  { id: 2, user: 'Sithara Fernando', shop: 'Laptop World', shopId: 2, rating: 4, comment: 'Good selection of laptops. Staff was very helpful.', date: '2024-01-10', status: 'approved' },
  { id: 3, user: 'Rajitha Silva', shop: 'Digital Zone', shopId: 3, rating: 5, comment: 'Best laptop shop in Unity Plaza. Very professional.', date: '2024-01-05', status: 'approved' },
  { id: 4, user: 'Dilshan Jayawardena', shop: 'Laptop World', shopId: 2, rating: 5, comment: 'Great selection of gaming laptops!', date: '2024-01-12', status: 'pending' },
  { id: 5, user: 'Nimal Rodrigo', shop: 'Laptop World', shopId: 2, rating: 4, comment: 'Good prices and helpful staff.', date: '2024-01-08', status: 'approved' },
  { id: 6, user: 'Amara Wickramasinghe', shop: 'Tech Corner', shopId: 1, rating: 2, comment: 'Service was slow and staff seemed unhelpful.', date: '2024-01-14', status: 'pending' },
];

export function ReviewsManagementPage() {
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'approved' | 'pending' | 'hidden'>('all');

  const filteredReviews = reviews.filter(review => {
    const matchesSearch = 
      review.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.shop.toLowerCase().includes(searchQuery.toLowerCase()) ||
      review.comment.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesStatus = filterStatus === 'all' || review.status === filterStatus;
    
    return matchesSearch && matchesStatus;
  });

  const handleApprove = (id: number) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, status: 'approved' } : review
    ));
  };

  const handleHide = (id: number) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, status: 'hidden' } : review
    ));
  };

  const handleShow = (id: number) => {
    setReviews(reviews.map(review =>
      review.id === id ? { ...review, status: 'approved' } : review
    ));
  };

  const stats = {
    total: reviews.length,
    approved: reviews.filter(r => r.status === 'approved').length,
    pending: reviews.filter(r => r.status === 'pending').length,
    hidden: reviews.filter(r => r.status === 'hidden').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">Reviews Management</h1>
        <p className="text-gray-600 mt-1">Moderate and manage customer reviews</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Total Reviews</div>
          <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Approved</div>
          <div className="text-2xl font-bold" style={{ color: '#16A34A' }}>{stats.approved}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Pending</div>
          <div className="text-2xl font-bold" style={{ color: '#F59E0B' }}>{stats.pending}</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-4">
          <div className="text-sm text-gray-600 mb-1">Hidden</div>
          <div className="text-2xl font-bold text-gray-600">{stats.hidden}</div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded-xl border border-gray-200 p-4">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search reviews..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <select
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value as any)}
            className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Status</option>
            <option value="approved">Approved</option>
            <option value="pending">Pending</option>
            <option value="hidden">Hidden</option>
          </select>
        </div>
      </div>

      {/* Reviews List */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  User & Shop
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Rating
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Review
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
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
              {filteredReviews.map((review) => (
                <tr key={review.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="font-medium text-gray-900">{review.user}</div>
                    <div className="text-sm text-gray-500">{review.shop}</div>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-1">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? 'text-yellow-500 fill-yellow-500'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-gray-700 line-clamp-2 max-w-md">
                      {review.comment}
                    </p>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{review.date}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${
                        review.status === 'approved'
                          ? 'bg-green-50 text-green-700'
                          : review.status === 'pending'
                          ? 'bg-amber-50 text-amber-700'
                          : 'bg-gray-50 text-gray-700'
                      }`}
                    >
                      {review.status === 'approved' && <CheckCircle className="w-3 h-3" />}
                      {review.status === 'hidden' && <EyeOff className="w-3 h-3" />}
                      {review.status.charAt(0).toUpperCase() + review.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      {review.status === 'pending' && (
                        <button
                          onClick={() => handleApprove(review.id)}
                          className="px-3 py-1 text-sm bg-green-50 text-green-600 rounded hover:bg-green-100 transition"
                        >
                          <CheckCircle className="w-4 h-4 inline mr-1" />
                          Approve
                        </button>
                      )}
                      {review.status === 'approved' && (
                        <button
                          onClick={() => handleHide(review.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-gray-100 rounded transition"
                          title="Hide review"
                        >
                          <EyeOff className="w-4 h-4" />
                        </button>
                      )}
                      {review.status === 'hidden' && (
                        <button
                          onClick={() => handleShow(review.id)}
                          className="p-2 text-gray-600 hover:text-green-600 hover:bg-gray-100 rounded transition"
                          title="Show review"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}