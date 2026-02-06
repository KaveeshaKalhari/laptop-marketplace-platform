import { MapPin, Phone, Star } from 'lucide-react';
import { Link } from 'react-router';

interface Shop {
  id: number;
  name: string;
  floor: number;
  unit: string;
  brands: string[];
  rating: number;
  reviewCount: number;
  phone: string;
}

interface ShopCardProps {
  shop: Shop;
}

export function ShopCard({ shop }: ShopCardProps) {
  return (
    <Link
      to={`/shop/${shop.id}`}
      className="bg-slate-800 rounded-xl border border-slate-700 p-6 hover:bg-slate-700 hover:shadow-lg hover:border-slate-600 transition group"
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="font-bold text-slate-100 text-lg group-hover:text-cyan-400 transition">
            {shop.name}
          </h3>
          <div className="flex items-center gap-1 text-slate-400 text-sm mt-1">
            <MapPin className="w-4 h-4" />
            Floor {shop.floor}, Unit {shop.unit}
          </div>
        </div>
        <div className="flex items-center gap-1 bg-yellow-500/20 px-2 py-1 rounded-lg">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="font-semibold text-slate-100 text-sm">{shop.rating}</span>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-xs text-slate-500 mb-2">Brands Available</div>
        <div className="flex flex-wrap gap-2">
          {shop.brands.map((brand) => (
            <span
              key={brand}
              className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/30"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-slate-700">
        <div className="text-xs text-slate-500">
          {shop.reviewCount} reviews
        </div>
        <div className="flex items-center gap-1 text-slate-400 text-sm">
          <Phone className="w-4 h-4" />
          <span className="text-xs">{shop.phone}</span>
        </div>
      </div>
    </Link>
  );
}