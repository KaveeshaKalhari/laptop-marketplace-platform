import { Search, Laptop, Briefcase, Gamepad2, TrendingUp, Store, Award, Zap, Users } from 'lucide-react';
import { Link } from 'react-router';
import { useState } from 'react';
import { ShopCard } from './ShopCard';

const brands = ['HP', 'Dell', 'Lenovo', 'ASUS', 'Acer', 'MSI'];

const categories = [
  { name: 'Student Laptops', icon: Laptop, description: 'Affordable & reliable', color: 'bg-blue-500/20 text-blue-400', link: '/laptops?type=Student' },
  { name: 'Business Laptops', icon: Briefcase, description: 'Professional & powerful', color: 'bg-purple-500/20 text-purple-400', link: '/laptops?type=Business' },
  { name: 'Gaming Laptops', icon: Gamepad2, description: 'High performance', color: 'bg-red-500/20 text-red-400', link: '/laptops?type=Gaming' },
];

const stats = [
  { icon: Store, value: '6+', label: 'Laptop Shops', color: 'from-blue-500 to-cyan-500' },
  { icon: Laptop, value: '180+', label: 'Laptop Models', color: 'from-purple-500 to-pink-500' },
  { icon: Award, value: '8', label: 'Top Brands', color: 'from-orange-500 to-red-500' },
  { icon: Users, value: '500+', label: 'Happy Customers', color: 'from-green-500 to-emerald-500' },
];

const features = [
  {
    icon: Search,
    title: 'Easy Comparison',
    description: 'Compare prices and specs across multiple shops instantly'
  },
  {
    icon: Award,
    title: 'Verified Shops',
    description: 'All shops are verified and trusted vendors'
  },
  {
    icon: Zap,
    title: 'Best Deals',
    description: 'Find the best laptop deals in Sri Lanka'
  }
];

const featuredShops = [
  {
    id: 1,
    name: 'Tech Corner',
    floor: 2,
    unit: 'A-23',
    brands: ['HP', 'Dell', 'Lenovo'],
    rating: 4.8,
    reviewCount: 124,
    phone: '+94 77 123 4567'
  },
  {
    id: 2,
    name: 'Laptop World',
    floor: 1,
    unit: 'B-15',
    brands: ['ASUS', 'Acer', 'MSI'],
    rating: 4.6,
    reviewCount: 98,
    phone: '+94 77 234 5678'
  },
  {
    id: 3,
    name: 'Digital Zone',
    floor: 3,
    unit: 'C-12',
    brands: ['HP', 'ASUS', 'MSI'],
    rating: 4.9,
    reviewCount: 156,
    phone: '+94 77 345 6789'
  },
];

export function HomePage() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  //const [searchQuery, setSearchQuery] = useState('');

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02ek0wIDM2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Laptop className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Find the Best Laptop at Unity Plaza
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto">
              Compare prices, specs, and brands from trusted laptop shops in Unity Plaza, Sri Lanka
            </p>
          </div>

          {/*/!* Search Bar *!/*/}
          {/*<div className="max-w-3xl mx-auto mb-8">*/}
          {/*  <div className="relative">*/}
          {/*    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />*/}
          {/*    <input*/}
          {/*      type="text"*/}
          {/*      placeholder="Search laptops, brands, or shops..."*/}
          {/*      value={searchQuery}*/}
          {/*      onChange={(e) => setSearchQuery(e.target.value)}*/}
          {/*      className="w-full pl-12 pr-4 py-4 rounded-xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg focus:outline-none focus:ring-2 focus:ring-white/50 focus:border-transparent text-white placeholder:text-blue-200"*/}
          {/*    />*/}
          {/*  </div>*/}
          {/*</div>*/}

          {/* Brand Filter Chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {brands.map((brand) => (
              <button
                key={brand}
                onClick={() => toggleBrand(brand)}
                className={`px-6 py-2 rounded-full transition shadow-md font-medium ${
                  selectedBrands.includes(brand)
                    ? 'bg-white text-blue-600 shadow-lg'
                    : 'bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 border border-white/20'
                }`}
              >
                {brand}
              </button>
            ))}
          </div>

          <div className="text-center">
            <Link
              to="/laptops"
              className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition shadow-lg font-medium"
            >
              <Search className="w-5 h-5" />
              Search All Laptops
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br ${stat.color} rounded-xl mb-3 shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Why Choose Unity Plaza Laptop Hub?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Your one-stop destination for finding the perfect laptop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:bg-slate-700 hover:border-slate-600 transition text-center"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-blue-500/20 rounded-xl mb-4">
                    <Icon className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Popular Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-950">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">Popular Categories</h2>
          <p className="text-slate-400">Find laptops perfect for your needs</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={category.link}
                className="p-8 rounded-xl border border-slate-700 bg-slate-800 hover:bg-slate-700 hover:shadow-lg hover:shadow-blue-500/10 hover:border-slate-600 transition group text-center"
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl ${category.color} mb-4 group-hover:scale-110 transition`}>
                  <Icon className="w-8 h-8" />
                </div>
                <h3 className="font-bold text-slate-100 mb-2 text-lg">{category.name}</h3>
                <p className="text-slate-400 text-sm">{category.description}</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Featured Shops */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-slate-950">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-2">Featured Shops</h2>
            <p className="text-slate-400">Top-rated laptop vendors at Unity Plaza</p>
          </div>
          <Link
            to="/shops"
            className="hidden sm:flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            View All Shops
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {featuredShops.map((shop) => (
            <ShopCard key={shop.id} shop={shop} />
          ))}
        </div>
        <div className="text-center sm:hidden">
          <Link
            to="/shops"
            className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
          >
            View All Shops
            <TrendingUp className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Browse by Brand Section */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Browse by Brand
            </h2>
            <p className="text-slate-400">
              Explore laptops from the world's leading manufacturers
            </p>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {brands.map((brand) => (
              <Link
                key={brand}
                to={`/laptops?brand=${brand}`}
                className="px-8 py-4 bg-slate-800 border border-slate-700 rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition group"
              >
                <span className="text-slate-100 font-medium group-hover:text-cyan-400 transition">
                  {brand}
                </span>
              </Link>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/brands"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium"
            >
              View All Brands
              <TrendingUp className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 shadow-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Laptop?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit Unity Plaza today and explore the widest selection of laptops in Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shops"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition shadow-lg font-medium"
            >
              Browse All Shops
            </Link>
            <Link
              to="/contact"
              className="inline-block px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition shadow-lg border border-blue-400 font-medium"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}