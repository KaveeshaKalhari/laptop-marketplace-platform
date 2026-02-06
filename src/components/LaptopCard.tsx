import { Cpu, HardDrive, MemoryStick, CheckCircle2, Circle } from 'lucide-react';
import { Link } from 'react-router';
//import { ImageWithFallback } from './figma/ImageWithFallback';

interface Laptop {
  id: number;
  brand: string;
  model: string;
  ram: string;
  storage: string;
  processor: string;
  price: number;
  type: string;
  shopId: number;
  shopName: string;
  image: string;
}

interface LaptopCardProps {
  laptop: Laptop;
  isComparing: boolean;
  onToggleCompare: () => void;
}

export function LaptopCard({ laptop, isComparing, onToggleCompare }: LaptopCardProps) {
  return (
    <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden hover:shadow-lg hover:shadow-blue-500/10 hover:border-slate-600 transition group">
      {/* Image */}
      <div className="relative aspect-[4/3] bg-slate-900 overflow-hidden">
        {/*<ImageWithFallback*/}
        {/*  src={`https://source.unsplash.com/800x600/?${encodeURIComponent(laptop.image)}`}*/}
        {/*  alt={`${laptop.brand} ${laptop.model}`}*/}
        {/*  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"*/}
        {/*/>*/}
        <div className="absolute top-3 left-3">
          <span className="px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full shadow-lg">
            {laptop.type}
          </span>
        </div>
        <button
          onClick={onToggleCompare}
          className="absolute top-3 right-3 p-2 bg-slate-800/90 backdrop-blur-sm rounded-full shadow-md hover:bg-slate-700 transition border border-slate-600"
          aria-label="Toggle compare"
        >
          {isComparing ? (
            <CheckCircle2 className="w-5 h-5 text-cyan-400" />
          ) : (
            <Circle className="w-5 h-5 text-slate-400" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-3">
          <div className="text-sm text-cyan-400 font-medium mb-1">{laptop.brand}</div>
          <h3 className="font-bold text-slate-100 mb-1">{laptop.model}</h3>
          <Link
            to={`/shop/${laptop.shopId}`}
            className="text-xs text-slate-400 hover:text-cyan-400 transition"
          >
            {laptop.shopName}
          </Link>
        </div>

        {/* Specs */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <Cpu className="w-4 h-4 text-slate-500" />
            <span className="text-xs">{laptop.processor}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <MemoryStick className="w-4 h-4 text-slate-500" />
            <span className="text-xs">{laptop.ram} RAM</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-400">
            <HardDrive className="w-4 h-4 text-slate-500" />
            <span className="text-xs">{laptop.storage}</span>
          </div>
        </div>

        {/* Price */}
        <div className="pt-4 border-t border-slate-700">
          <div className="text-2xl font-bold text-slate-100 mb-3">
            LKR {laptop.price.toLocaleString()}
          </div>
          <Link
            to={`/shop/${laptop.shopId}`}
            className="block w-full px-4 py-2 bg-blue-600 text-white text-center rounded-lg hover:bg-blue-500 transition text-sm shadow-lg hover:shadow-blue-500/50"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}