import { BrowserRouter as Router, Routes, Route } from 'react-router';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ShopDirectoryPage } from './components/ShopDirectoryPage';
import { ShopProfilePage } from './components/ShopProfilePage';
import { LaptopListingPage } from './components/LaptopListingPage';
import { BrandsPage } from './components/BrandsPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { AdminLayout } from './components/admin/AdminLayout';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { ShopManagementPage } from './components/admin/ShopManagementPage';
import { LaptopManagementPage } from './components/admin/LaptopManagementPage';
import { BrandCategoryManagementPage } from './components/admin/BrandCategoryManagementPage';
import { ReviewsManagementPage } from './components/admin/ReviewsManagementPage';

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-white">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={
                        <>
                            <Header />
                            <HomePage />
                        </>
                    } />
                    <Route path="/shops" element={
                        <>
                            <Header />
                            <ShopDirectoryPage />
                        </>
                    } />
                    <Route path="/shop/:id" element={
                        <>
                            <Header />
                            <ShopProfilePage />
                        </>
                    } />
                    <Route path="/laptops" element={
                        <>
                            <Header />
                            <LaptopListingPage />
                        </>
                    } />
                    <Route path="/brands" element={
                        <>
                            <Header />
                            <BrandsPage />
                        </>
                    } />
                    <Route path="/about" element={
                        <>
                            <Header />
                            <AboutPage />
                        </>
                    } />
                    <Route path="/contact" element={
                        <>
                            <Header />
                            <ContactPage />
                        </>
                    } />

                    {/* Admin Routes */}
                    <Route path="/admin" element={<AdminLayout />}>
                        <Route index element={<AdminDashboard />} />
                        <Route path="shops" element={<ShopManagementPage />} />
                        <Route path="laptops" element={<LaptopManagementPage />} />
                        <Route path="brands" element={<BrandCategoryManagementPage />} />
                        <Route path="reviews" element={<ReviewsManagementPage />} />
                    </Route>
                </Routes>
            </div>
        </Router>
    );
}