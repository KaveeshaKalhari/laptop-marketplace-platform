import { useEffect, useState } from 'react';
import { shopService } from '../services/shopService';
import type {Shop} from '../types';
import { ShopCard } from './ShopCard';

export function ShopDirectoryPage() {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchShops = async () => {
      try {
        setLoading(true);
        const response = await shopService.getAllShops();
        setShops(response.data.data);
      } catch (err: any) {
        setError(err.message || 'Failed to fetch shops');
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Shop Directory</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop) => (
              <ShopCard key={shop._id} shop={shop} />
          ))}
        </div>
      </div>
  );
}