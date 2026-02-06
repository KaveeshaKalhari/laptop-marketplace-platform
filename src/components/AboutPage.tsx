import { Link } from 'react-router';
import { 
  Laptop, 
  Store, 
  ShieldCheck, 
  TrendingUp, 
  Users, 
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Zap,
  Target
} from 'lucide-react';

const features = [
  {
    icon: Store,
    title: 'Multiple Vendors',
    description: 'Access 6+ trusted laptop shops all under one roof at Unity Plaza'
  },
  {
    icon: TrendingUp,
    title: 'Price Comparison',
    description: 'Compare prices and specs across different shops to find the best deals'
  },
  {
    icon: ShieldCheck,
    title: 'Verified Shops',
    description: 'All shops are verified and trusted vendors with excellent service records'
  },
  {
    icon: Laptop,
    title: 'Wide Selection',
    description: '180+ laptop models from top brands like HP, Dell, ASUS, Lenovo, and more'
  },
  {
    icon: Users,
    title: 'Expert Guidance',
    description: 'Knowledgeable staff to help you choose the perfect laptop for your needs'
  },
  {
    icon: Award,
    title: 'Best Warranty',
    description: 'Comprehensive warranty and after-sales support from all vendors'
  }
];

const stats = [
  { value: '6+', label: 'Laptop Shops' },
  { value: '180+', label: 'Laptop Models' },
  { value: '500+', label: 'Happy Customers' },
  { value: '4.8', label: 'Average Rating' }
];

const whyChooseUs = [
  {
    icon: Target,
    title: 'Centralized Shopping',
    description: 'No need to visit multiple locations. All top laptop vendors are in one building.'
  },
  {
    icon: Zap,
    title: 'Instant Comparison',
    description: 'Walk between shops and compare prices, specs, and offers in real-time.'
  },
  {
    icon: ShieldCheck,
    title: 'Trusted Platform',
    description: 'We only feature reputable sellers with proven track records and positive reviews.'
  }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02ek0wIDM2YzAtMy4zMSAyLjY5LTYgNi02czYgMi42OSA2IDYtMi42OSA2LTYgNi02LTIuNjktNi02eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 shadow-lg">
              <Laptop className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              About Unity Plaza Laptop Hub
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 max-w-3xl mx-auto">
              Sri Lanka's Premier Laptop Shopping Destination
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-400 leading-relaxed">
              Unity Plaza Laptop Hub is dedicated to simplifying your laptop shopping experience. 
              We bring together the best laptop vendors in Sri Lanka under one roof, allowing you 
              to compare, explore, and purchase with confidence. Whether you're a student, professional, 
              or gamer, we help you find the perfect laptop at the best price.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:bg-slate-700 hover:border-slate-600 transition group"
                >
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500/30 transition">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="font-bold text-slate-100 mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Why Choose Unity Plaza?
            </h2>
            <p className="text-lg text-slate-400 max-w-2xl mx-auto">
              We're not just a marketplace — we're your trusted partner in finding the right laptop
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-4 shadow-lg shadow-cyan-500/30">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-100 mb-2 text-lg">{item.title}</h3>
                  <p className="text-slate-400">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Location & Contact Info */}
      <section className="py-16 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-100 mb-4">
              Visit Us Today
            </h2>
            <p className="text-lg text-slate-400">
              Located in the heart of Colombo, Sri Lanka
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Location Card */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">Our Location</h3>
                  <p className="text-slate-400">
                    Unity Plaza<br />
                    Colombo 04<br />
                    Sri Lanka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">Business Hours</h3>
                  <p className="text-slate-400">
                    Monday - Saturday<br />
                    10:00 AM - 8:00 PM<br />
                    Sunday: 11:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-slate-800 rounded-xl border border-slate-700 p-8">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">Phone</h3>
                  <a href="tel:+94112345678" className="text-cyan-400 hover:text-cyan-300">
                    +94 11 234 5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-100 mb-2">Email</h3>
                  <a href="mailto:info@unityplazalaptophub.lk" className="text-cyan-400 hover:text-cyan-300">
                    info@unityplazalaptophub.lk
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Find Your Perfect Laptop?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Browse our extensive collection from multiple vendors and get the best deals in Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/laptops"
              className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-slate-100 transition shadow-lg font-medium"
            >
              Browse Laptops
            </Link>
            <Link
              to="/shops"
              className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition shadow-lg border border-blue-400 font-medium"
            >
              View All Shops
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}