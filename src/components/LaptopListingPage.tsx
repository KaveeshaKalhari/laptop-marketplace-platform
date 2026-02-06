import { useState } from 'react';
import { Search, Filter, X, ChevronDown, Laptop, Award, DollarSign, TrendingUp, MemoryStick, HardDrive, Cpu, Briefcase, Gamepad2 } from 'lucide-react';
import { LaptopCard } from './LaptopCard';
import { Link } from 'react-router';

const allLaptops = [
  { id: 1, brand: 'HP', model: '15s-fq5007TU', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 145000, type: 'Business', shopId: 1, shopName: 'Tech Corner', image: 'laptop hp business' },
  { id: 2, brand: 'Dell', model: 'Inspiron 15 3520', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 155000, type: 'Business', shopId: 1, shopName: 'Tech Corner', image: 'laptop dell office' },
  { id: 3, brand: 'Lenovo', model: 'IdeaPad Slim 3', ram: '8GB', storage: '256GB SSD', processor: 'Intel Core i3-1215U', price: 125000, type: 'Student', shopId: 1, shopName: 'Tech Corner', image: 'laptop lenovo student' },
  { id: 4, brand: 'HP', model: 'Pavilion 14-dv2014TU', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i7-1255U', price: 195000, type: 'Business', shopId: 1, shopName: 'Tech Corner', image: 'laptop hp modern' },
  { id: 5, brand: 'ASUS', model: 'VivoBook 15', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 148000, type: 'Student', shopId: 2, shopName: 'Laptop World', image: 'laptop asus vivobook' },
  { id: 6, brand: 'MSI', model: 'GF63 Thin', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i5-11400H', price: 225000, type: 'Gaming', shopId: 2, shopName: 'Laptop World', image: 'laptop msi gaming' },
  { id: 7, brand: 'Acer', model: 'Aspire 5', ram: '8GB', storage: '512GB SSD', processor: 'AMD Ryzen 5 5500U', price: 135000, type: 'Student', shopId: 2, shopName: 'Laptop World', image: 'laptop acer aspire' },
  { id: 8, brand: 'ASUS', model: 'TUF Gaming F15', ram: '16GB', storage: '1TB SSD', processor: 'Intel Core i7-12700H', price: 285000, type: 'Gaming', shopId: 3, shopName: 'Digital Zone', image: 'laptop asus tuf gaming' },
  { id: 9, brand: 'Dell', model: 'Vostro 3520', ram: '8GB', storage: '512GB SSD', processor: 'Intel Core i5-1235U', price: 152000, type: 'Business', shopId: 4, shopName: 'Computer City', image: 'laptop dell vostro' },
  { id: 10, brand: 'Lenovo', model: 'ThinkPad E14', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i7-1255U', price: 215000, type: 'Business', shopId: 4, shopName: 'Computer City', image: 'laptop lenovo thinkpad' },
  { id: 11, brand: 'MSI', model: 'Katana GF66', ram: '16GB', storage: '512GB SSD', processor: 'Intel Core i7-12650H', price: 295000, type: 'Gaming', shopId: 5, shopName: 'Gaming Depot', image: 'laptop msi katana gaming' },
  { id: 12, brand: 'Acer', model: 'Nitro 5', ram: '16GB', storage: '512GB SSD', processor: 'AMD Ryzen 7 5800H', price: 245000, type: 'Gaming', shopId: 5, shopName: 'Gaming Depot', image: 'laptop acer nitro gaming' },
];

const brands = ['HP', 'Dell', 'Lenovo', 'ASUS', 'Acer', 'MSI'];
const ramOptions = ['4GB', '8GB', '16GB', '32GB'];
const storageOptions = ['256GB', '512GB', '1TB', '2TB'];
const laptopTypes = ['Student', 'Business', 'Gaming'];
const priceRanges = [
  { label: 'Under 100k', min: 0, max: 100000 },
  { label: '100k - 150k', min: 100000, max: 150000 },
  { label: '150k - 200k', min: 150000, max: 200000 },
  { label: '200k - 250k', min: 200000, max: 250000 },
  { label: 'Above 250k', min: 250000, max: Infinity },
];

const typeConfig = {
  'Student': { icon: Laptop, color: 'from-blue-500 to-cyan-500', bgColor: 'bg-blue-500/20 text-blue-400' },
  'Business': { icon: Briefcase, color: 'from-purple-500 to-pink-500', bgColor: 'bg-purple-500/20 text-purple-400' },
  'Gaming': { icon: Gamepad2, color: 'from-orange-500 to-red-500', bgColor: 'bg-red-500/20 text-red-400' },
};

export function LaptopListingPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedRAM, setSelectedRAM] = useState<string[]>([]);
  const [selectedStorage, setSelectedStorage] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>('');
  const [compareList, setCompareList] = useState<number[]>([]);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev =>
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const toggleRAM = (ram: string) => {
    setSelectedRAM(prev =>
      prev.includes(ram) ? prev.filter(r => r !== ram) : [...prev, ram]
    );
  };

  const toggleStorage = (storage: string) => {
    setSelectedStorage(prev =>
      prev.includes(storage) ? prev.filter(s => s !== storage) : [...prev, storage]
    );
  };

  const toggleType = (type: string) => {
    setSelectedTypes(prev =>
      prev.includes(type) ? prev.filter(t => t !== type) : [...prev, type]
    );
  };

  const toggleCompare = (id: number) => {
    setCompareList(prev =>
      prev.includes(id) ? prev.filter(lid => lid !== id) : [...prev, id].slice(-3)
    );
  };

  const clearFilters = () => {
    setSelectedBrands([]);
    setSelectedRAM([]);
    setSelectedStorage([]);
    setSelectedTypes([]);
    setSelectedPriceRange('');
    setSearchQuery('');
  };

  const filteredLaptops = allLaptops.filter(laptop => {
    const matchesSearch = 
      laptop.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      laptop.model.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(laptop.brand);
    const matchesRAM = selectedRAM.length === 0 || selectedRAM.some(ram => laptop.ram.includes(ram));
    const matchesStorage = selectedStorage.length === 0 || selectedStorage.some(storage => laptop.storage.includes(storage));
    const matchesType = selectedTypes.length === 0 || selectedTypes.includes(laptop.type);
    
    let matchesPrice = true;
    if (selectedPriceRange) {
      const range = priceRanges.find(r => r.label === selectedPriceRange);
      if (range) {
        matchesPrice = laptop.price >= range.min && laptop.price < range.max;
      }
    }
    
    return matchesSearch && matchesBrand && matchesRAM && matchesStorage && matchesType && matchesPrice;
  });

  const totalPages = Math.ceil(filteredLaptops.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedLaptops = filteredLaptops.slice(startIndex, startIndex + itemsPerPage);

  const avgPrice = Math.round(allLaptops.reduce((sum, l) => sum + l.price, 0) / allLaptops.length);

  const FilterContent = () => (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-slate-100">Advanced Filters</h3>
        <button
          onClick={clearFilters}
          className="text-sm text-cyan-400 hover:text-cyan-300"
        >
          Clear All
        </button>
      </div>

      {/* Brand Filter */}
      <div>
        <h4 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-cyan-400" />
          Brand
        </h4>
        <div className="space-y-2">
          {brands.map((brand) => (
            <label key={brand} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 bg-slate-700"
              />
              <span className="text-slate-300 group-hover:text-slate-100">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      {/* RAM Filter */}
      <div>
        <h4 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
          <MemoryStick className="w-4 h-4 text-cyan-400" />
          RAM
        </h4>
        <div className="space-y-2">
          {ramOptions.map((ram) => (
            <label key={ram} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedRAM.includes(ram)}
                onChange={() => toggleRAM(ram)}
                className="w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 bg-slate-700"
              />
              <span className="text-slate-300 group-hover:text-slate-100">{ram}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Storage Filter */}
      <div>
        <h4 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
          <HardDrive className="w-4 h-4 text-cyan-400" />
          Storage
        </h4>
        <div className="space-y-2">
          {storageOptions.map((storage) => (
            <label key={storage} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedStorage.includes(storage)}
                onChange={() => toggleStorage(storage)}
                className="w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 bg-slate-700"
              />
              <span className="text-slate-300 group-hover:text-slate-100">{storage}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Type Filter */}
      <div>
        <h4 className="font-semibold text-slate-100 mb-3">Laptop Type</h4>
        <div className="space-y-2">
          {laptopTypes.map((type) => (
            <label key={type} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="w-4 h-4 text-blue-600 rounded border-slate-600 focus:ring-blue-500 bg-slate-700"
              />
              <span className="text-slate-300 group-hover:text-slate-100">{type}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h4 className="font-semibold text-slate-100 mb-3 flex items-center gap-2">
          <DollarSign className="w-4 h-4 text-cyan-400" />
          Price Range
        </h4>
        <div className="space-y-2">
          {priceRanges.map((range) => (
            <label key={range.label} className="flex items-center gap-2 cursor-pointer group">
              <input
                type="radio"
                name="priceRange"
                checked={selectedPriceRange === range.label}
                onChange={() => setSelectedPriceRange(range.label)}
                className="w-4 h-4 text-blue-600 border-slate-600 focus:ring-blue-500 bg-slate-700"
              />
              <span className="text-slate-300 group-hover:text-slate-100">{range.label}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02ek0wIDM2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Laptop className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Browse Laptops
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Explore {allLaptops.length} laptops from {brands.length} top brands at Unity Plaza
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl mb-3 shadow-lg">
                <Laptop className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
                {allLaptops.length}
              </div>
              <div className="text-sm text-slate-400">Laptop Models</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl mb-3 shadow-lg">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
                {brands.length}
              </div>
              <div className="text-sm text-slate-400">Top Brands</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl mb-3 shadow-lg">
                <DollarSign className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
                {Math.round(avgPrice / 1000)}k
              </div>
              <div className="text-sm text-slate-400">Avg Price</div>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl mb-3 shadow-lg">
                <TrendingUp className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-1">
                {laptopTypes.length}
              </div>
              <div className="text-sm text-slate-400">Categories</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search by brand or model..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-slate-700 bg-slate-800 text-slate-100 placeholder:text-slate-500 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Quick Filter Chips - Laptop Types */}
        <div className="mb-6">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={clearFilters}
              className={`px-4 py-2 rounded-lg transition text-sm font-medium ${
                selectedTypes.length === 0 && selectedBrands.length === 0
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
              }`}
            >
              All Laptops
            </button>
            {laptopTypes.map((type) => {
              const config = typeConfig[type as keyof typeof typeConfig];
              const Icon = config.icon;
              return (
                <button
                  key={type}
                  onClick={() => toggleType(type)}
                  className={`px-4 py-2 rounded-lg transition text-sm font-medium flex items-center gap-2 ${
                    selectedTypes.includes(type)
                      ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/50'
                      : 'bg-slate-800 text-slate-300 border border-slate-700 hover:bg-slate-700'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {type}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile Filter Button */}
        <div className="lg:hidden mb-6">
          <button
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:bg-slate-700"
          >
            <Filter className="w-5 h-5" />
            More Filters
          </button>
        </div>

        {/* Compare Bar */}
        {compareList.length > 0 && (
          <div className="mb-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
            <div className="flex items-center justify-between">
              <div className="text-sm text-slate-300">
                {compareList.length} laptop{compareList.length !== 1 ? 's' : ''} selected for comparison
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => setCompareList([])}
                  className="px-4 py-2 text-sm text-slate-400 hover:text-slate-200"
                >
                  Clear
                </button>
                <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-500 shadow-lg hover:shadow-blue-500/50">
                  Compare Now
                </button>
              </div>
            </div>
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-6 sticky top-24">
              <FilterContent />
            </div>
          </aside>

          {/* Mobile Filter Modal */}
          {mobileFilterOpen && (
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 lg:hidden">
              <div className="fixed inset-y-0 left-0 w-80 bg-slate-800 shadow-xl p-6 overflow-y-auto border-r border-slate-700">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-bold text-slate-100 text-lg">Filters</h3>
                  <button
                    onClick={() => setMobileFilterOpen(false)}
                    className="p-2 hover:bg-slate-700 rounded-lg text-slate-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                <FilterContent />
              </div>
            </div>
          )}

          {/* Laptop Grid */}
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-slate-400">
                <span className="text-cyan-400 font-medium">{filteredLaptops.length}</span> laptop{filteredLaptops.length !== 1 ? 's' : ''} found
              </div>
              {filteredLaptops.length > 0 && (
                <div className="flex items-center gap-2 text-sm text-slate-400">
                  <TrendingUp className="w-4 h-4" />
                  <span className="hidden sm:inline">Best matches</span>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedLaptops.map((laptop) => (
                <LaptopCard
                  key={laptop.id}
                  laptop={laptop}
                  isComparing={compareList.includes(laptop.id)}
                  onToggleCompare={() => toggleCompare(laptop.id)}
                />
              ))}
            </div>
            
            {filteredLaptops.length === 0 && (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-2xl mb-4">
                  <Search className="w-10 h-10 text-slate-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-300 mb-2">No laptops found</h3>
                <p className="text-slate-500 mb-4">Try adjusting your search or filters</p>
                <button
                  onClick={clearFilters}
                  className="text-cyan-400 hover:text-cyan-300 font-medium"
                >
                  Clear all filters
                </button>
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-8 flex items-center justify-center gap-2">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded-lg border ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/50'
                        : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                <button
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 rounded-lg border border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white py-16 shadow-xl mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Visit our shops at Unity Plaza or contact us for personalized laptop recommendations
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shops"
              className="inline-block px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-blue-50 transition shadow-lg font-medium"
            >
              Visit Shops
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
