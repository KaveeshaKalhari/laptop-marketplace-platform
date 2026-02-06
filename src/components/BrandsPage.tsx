import { useState } from 'react';
import { Link } from 'react-router';
import { 
  Search, 
  Laptop, 
  TrendingUp, 
  Award,
  ChevronRight,
  Star,
  Store
} from 'lucide-react';

interface Brand {
  id: number;
  name: string;
  description: string;
  laptopCount: number;
  shopCount: number;
  priceRange: string;
  rating: number;
  popular: boolean;
  image: string;
  topModels: string[];
}

const brands: Brand[] = [
  {
    id: 1,
    name: 'HP',
    description: 'Reliable and affordable laptops for business and personal use',
    laptopCount: 45,
    shopCount: 5,
    priceRange: 'LKR 95,000 - 250,000',
    rating: 4.6,
    popular: true,
    image: 'hp laptop modern',
    topModels: ['HP Pavilion 15', 'HP Envy x360', 'HP ProBook 450']
  },
  {
    id: 2,
    name: 'Dell',
    description: 'Premium business and gaming laptops with excellent build quality',
    laptopCount: 38,
    shopCount: 4,
    priceRange: 'LKR 110,000 - 320,000',
    rating: 4.7,
    popular: true,
    image: 'dell laptop office',
    topModels: ['Dell XPS 13', 'Dell Inspiron 15', 'Dell Latitude 7420']
  },
  {
    id: 3,
    name: 'ASUS',
    description: 'Innovative gaming and creator laptops with cutting-edge technology',
    laptopCount: 42,
    shopCount: 6,
    priceRange: 'LKR 85,000 - 450,000',
    rating: 4.8,
    popular: true,
    image: 'asus laptop gaming',
    topModels: ['ASUS ROG Strix', 'ASUS VivoBook', 'ASUS ZenBook']
  },
  {
    id: 4,
    name: 'Lenovo',
    description: 'Versatile laptops for students, professionals, and gamers',
    laptopCount: 36,
    shopCount: 5,
    priceRange: 'LKR 75,000 - 280,000',
    rating: 4.5,
    popular: true,
    image: 'lenovo laptop business',
    topModels: ['Lenovo ThinkPad', 'Lenovo IdeaPad', 'Lenovo Legion']
  },
  {
    id: 5,
    name: 'Acer',
    description: 'Budget-friendly laptops with great performance for students',
    laptopCount: 28,
    shopCount: 4,
    priceRange: 'LKR 65,000 - 220,000',
    rating: 4.4,
    popular: false,
    image: 'acer laptop student',
    topModels: ['Acer Aspire 5', 'Acer Swift 3', 'Acer Nitro 5']
  },
  {
    id: 6,
    name: 'MSI',
    description: 'High-performance gaming laptops for serious gamers',
    laptopCount: 22,
    shopCount: 3,
    priceRange: 'LKR 180,000 - 550,000',
    rating: 4.7,
    popular: false,
    image: 'msi gaming laptop',
    topModels: ['MSI Katana', 'MSI Stealth', 'MSI Raider']
  },
  {
    id: 7,
    name: 'Apple',
    description: 'Premium MacBooks for creative professionals',
    laptopCount: 12,
    shopCount: 2,
    priceRange: 'LKR 280,000 - 950,000',
    rating: 4.9,
    popular: true,
    image: 'macbook laptop',
    topModels: ['MacBook Air M2', 'MacBook Pro 14"', 'MacBook Pro 16"']
  },
  {
    id: 8,
    name: 'Samsung',
    description: 'Sleek and powerful laptops with stunning displays',
    laptopCount: 15,
    shopCount: 3,
    priceRange: 'LKR 150,000 - 380,000',
    rating: 4.6,
    popular: false,
    image: 'samsung laptop modern',
    topModels: ['Galaxy Book3', 'Galaxy Book Pro', 'Galaxy Book2']
  }
];

export function BrandsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<'all' | 'popular'>('all');

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         brand.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesFilter = filterType === 'all' || (filterType === 'popular' && brand.popular);
    return matchesSearch && matchesFilter;
  });

  const popularBrands = brands.filter(b => b.popular);
  const totalLaptops = brands.reduce((sum, b) => sum + b.laptopCount, 0);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02ek0wIDM2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Explore Top Laptop Brands
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Browse {brands.length} trusted brands with {totalLaptops}+ laptop models available at Unity Plaza
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                {brands.length}
              </div>
              <div className="text-sm sm:text-base text-slate-400">Brands Available</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                {totalLaptops}+
              </div>
              <div className="text-sm sm:text-base text-slate-400">Laptop Models</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                6+
              </div>
              <div className="text-sm sm:text-base text-slate-400">Shops Carrying</div>
            </div>
            <div className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                4.7
              </div>
              <div className="text-sm sm:text-base text-slate-400">Avg Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-slate-950 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search brands..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filter Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilterType('all')}
                className={`px-6 py-3 rounded-lg transition font-medium ${
                  filterType === 'all'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                All Brands
              </button>
              <button
                onClick={() => setFilterType('popular')}
                className={`px-6 py-3 rounded-lg transition font-medium flex items-center gap-2 ${
                  filterType === 'popular'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Popular
              </button>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4">
            <p className="text-slate-400">
              Showing <span className="text-cyan-400 font-medium">{filteredBrands.length}</span> brand{filteredBrands.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:border-slate-600 transition group"
              >
                {/* Brand Header with Badge */}
                <div className="relative h-48 bg-gradient-to-br from-slate-700 to-slate-800">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-3">
                        <Laptop className="w-10 h-10 text-cyan-400" />
                      </div>
                      <h2 className="text-3xl font-bold text-white">{brand.name}</h2>
                    </div>
                  </div>
                  {brand.popular && (
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-yellow-500/20 border border-yellow-500/30 text-yellow-400 rounded-full text-xs font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        Popular
                      </span>
                    </div>
                  )}
                </div>

                {/* Brand Content */}
                <div className="p-6">
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {brand.description}
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-900 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Laptop className="w-4 h-4 text-cyan-400" />
                        <span className="text-xs text-slate-400">Models</span>
                      </div>
                      <div className="text-lg font-bold text-slate-100">{brand.laptopCount}</div>
                    </div>
                    <div className="bg-slate-900 rounded-lg p-3">
                      <div className="flex items-center gap-2 mb-1">
                        <Store className="w-4 h-4 text-purple-400" />
                        <span className="text-xs text-slate-400">Shops</span>
                      </div>
                      <div className="text-lg font-bold text-slate-100">{brand.shopCount}</div>
                    </div>
                  </div>

                  {/* Price Range */}
                  <div className="mb-4 p-3 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <div className="text-xs text-blue-400 mb-1">Price Range</div>
                    <div className="text-sm font-medium text-blue-300">{brand.priceRange}</div>
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                      <span className="font-medium text-slate-100">{brand.rating}</span>
                    </div>
                    <span className="text-slate-400 text-sm">Average Rating</span>
                  </div>

                  {/* Top Models */}
                  <div className="mb-4">
                    <div className="text-xs font-medium text-slate-400 mb-2">Popular Models:</div>
                    <div className="flex flex-wrap gap-2">
                      {brand.topModels.slice(0, 2).map((model, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs"
                        >
                          {model}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* View Button */}
                  <Link
                    to={`/laptops?brand=${brand.name}`}
                    className="block w-full px-4 py-3 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-500 transition shadow-lg hover:shadow-blue-500/50 font-medium group-hover:bg-blue-500 flex items-center justify-center gap-2"
                  >
                    View All {brand.name} Laptops
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredBrands.length === 0 && (
            <div className="text-center py-16">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl mb-4">
                <Search className="w-10 h-10 text-slate-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-300 mb-2">No brands found</h3>
              <p className="text-slate-500">Try adjusting your search or filter</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Can't Decide? We Can Help!
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our shops at Unity Plaza and get expert advice on choosing the perfect laptop for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shops"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition shadow-lg font-medium"
            >
              Browse Shops
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition shadow-lg border border-blue-400 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}