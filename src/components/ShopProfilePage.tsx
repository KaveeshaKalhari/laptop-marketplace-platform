import { useParams, Link } from 'react-router';
import { MapPin, Phone, Mail, Star, ChevronLeft } from 'lucide-react';
import { StarRating } from './StarRating';

const shopData: Record<string, any> = {
  '1': {
    id: 1,
    name: 'Tech Corner',
    floor: 2,
    unit: 'A-23',
    brands: ['HP', 'Dell', 'Lenovo'],
    rating: 4.8,
    reviewCount: 124,
    phone: '+94 77 123 4567',
    email: 'info@techcorner.lk',
    description: 'Your trusted destination for HP, Dell, and Lenovo laptops. We offer competitive prices and excellent after-sales service.',
    laptops: [
      { id: 1, brand: 'HP', model: '15s-fq5007TU', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 145000, image: 'laptop hp business' },
      { id: 2, brand: 'Dell', model: 'Inspiron 15 3520', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 155000, image: 'laptop dell office' },
      { id: 3, brand: 'Lenovo', model: 'IdeaPad Slim 3', ram: '8GB', storage: '256GB SSD', processor: 'Intel Core i3-1215U', price: 125000, image: 'laptop lenovo student' },
      { id: 4, brand: 'HP', model: 'Pavilion 14-dv2014TU', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i7-1255U', price: 195000, image: 'laptop hp modern' },
    ],
    reviews: [
      { id: 1, user: 'Kasun Perera', rating: 5, comment: 'Excellent service and great prices. Highly recommended!', date: '2024-01-15' },
      { id: 2, user: 'Sithara Fernando', rating: 4, comment: 'Good selection of laptops. Staff was very helpful.', date: '2024-01-10' },
      { id: 3, user: 'Rajitha Silva', rating: 5, comment: 'Best laptop shop in Unity Plaza. Very professional.', date: '2024-01-05' },
    ]
  },
  '2': {
    id: 2,
    name: 'Laptop World',
    floor: 1,
    unit: 'B-15',
    brands: ['ASUS', 'Acer', 'MSI'],
    rating: 4.6,
    reviewCount: 98,
    phone: '+94 77 234 5678',
    email: 'contact@laptopworld.lk',
    description: 'Specializing in gaming and high-performance laptops from ASUS, Acer, and MSI.',
    laptops: [
      { id: 5, brand: 'ASUS', model: 'VivoBook 15', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 148000, image: 'laptop asus vivobook' },
      { id: 6, brand: 'MSI', model: 'GF63 Thin', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i5-11400H', price: 225000, image: 'laptop msi gaming' },
      { id: 7, brand: 'Acer', model: 'Aspire 5', ram: '8GB', storage: '512GB SSD', processor: 'AMD Ryzen 5 5500U', price: 135000, image: 'laptop acer aspire' },
    ],
    reviews: [
      { id: 4, user: 'Dilshan Jayawardena', rating: 5, comment: 'Great selection of gaming laptops!', date: '2024-01-12' },
      { id: 5, user: 'Nimal Rodrigo', rating: 4, comment: 'Good prices and helpful staff.', date: '2024-01-08' },
    ]
  },
};

export function ShopProfilePage() {
  const { id } = useParams();
  const shop = shopData[id || '1'] || shopData['1'];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/shops" className="inline-flex items-center gap-1 text-blue-100 hover:text-white mb-4">
            <ChevronLeft className="w-4 h-4" />
            Back to Shops
          </Link>
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold mb-2">{shop.name}</h1>
              <div className="flex items-center gap-4 text-blue-100">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  Floor {shop.floor}, Unit {shop.unit}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  {shop.rating} ({shop.reviewCount} reviews)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* About */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-4">About {shop.name}</h2>
              <p className="text-gray-600 mb-4">{shop.description}</p>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Brands Available</h3>
                <div className="flex flex-wrap gap-2">
                  {shop.brands.map((brand: string) => (
                    <span
                      key={brand}
                      className="px-4 py-2 bg-cyan-50 text-cyan-600 rounded-lg font-medium"
                    >
                      {brand}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Laptop Listings */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Available Laptops</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Model</th>
                      <th className="text-left py-3 px-2 font-semibold text-gray-900">Specs</th>
                      <th className="text-right py-3 px-2 font-semibold text-gray-900">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {shop.laptops.map((laptop: any) => (
                      <tr key={laptop.id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="py-4 px-2">
                          <div className="font-semibold text-gray-900">{laptop.brand}</div>
                          <div className="text-sm text-gray-600">{laptop.model}</div>
                        </td>
                        <td className="py-4 px-2">
                          <div className="text-sm text-gray-600">
                            {laptop.processor}
                          </div>
                          <div className="text-sm text-gray-500">
                            {laptop.ram} RAM, {laptop.storage}
                          </div>
                        </td>
                        <td className="py-4 px-2 text-right">
                          <div className="font-bold text-gray-900">LKR {laptop.price.toLocaleString()}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Customer Reviews</h2>
              <div className="space-y-4">
                {shop.reviews.map((review: any) => (
                  <div key={review.id} className="pb-4 border-b border-gray-100 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-gray-900">{review.user}</div>
                        <StarRating rating={review.rating} />
                      </div>
                      <div className="text-sm text-gray-500">{review.date}</div>
                    </div>
                    <p className="text-gray-600">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Phone</div>
                    <a href={`tel:${shop.phone}`} className="text-gray-900 hover:text-blue-600">
                      {shop.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Email</div>
                    <a href={`mailto:${shop.email}`} className="text-gray-900 hover:text-blue-600">
                      {shop.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="text-sm text-gray-500 mb-1">Location</div>
                    <div className="text-gray-900">
                      Floor {shop.floor}, Unit {shop.unit}<br />
                      Unity Plaza, Colombo
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href={`tel:${shop.phone}`}
                  className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-700 transition"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}