export interface Shop {
    _id: string;
    name: string;
    description: string;
    address: {
        street: string;
        city: string;
        state?: string;
        country: string;
        zipCode?: string;
    };
    contact: {
        phone: string;
        email: string;
        website?: string;
    };
    image?: string;
    rating: {
        average: number;
        count: number;
    };
    isVerified: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface Laptop {
    _id: string;
    shop: Shop | string;
    brand: Brand | string;
    category: Category | string;
    model: string;
    title: string;
    description: string;
    specifications: LaptopSpecs;
    condition: 'new' | 'refurbished' | 'used-like-new' | 'used-good' | 'used-fair';
    price: {
        current: number;
        original?: number;
        currency: string;
    };
    stock: {
        quantity: number;
        inStock: boolean;
    };
    images: {
        url: string;
        alt?: string;
        isPrimary?: boolean;
    }[];
    rating: {
        average: number;
        count: number;
    };
    createdAt: string;
    updatedAt: string;
}

export interface LaptopSpecs {
    processor: {
        brand: string;
        model: string;
        cores: number;
    };
    ram: {
        size: number;
        type: string;
    };
    storage: {
        type: string;
        capacity: number;
    }[];
    display: {
        size: number;
        resolution: string;
        type: string;
    };
    graphics: {
        type: string;
        model: string;
    };
    os: string;
    weight: number;
}

export interface Brand {
    _id: string;
    name: string;
    slug: string;
    logo?: string;
    laptopCount: number;
}

export interface Category {
    _id: string;
    name: string;
    slug: string;
    laptopCount: number;
}