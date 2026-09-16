import { useEffect } from 'react'
import { MapPin } from 'lucide-react'
import { BrowserRouter, Link, Navigate, Route, Routes, useLocation, useNavigationType } from 'react-router-dom'
import Navbar from '../components/Navbar'
import {
  COMPANY_INFO,
  CONTACT_DETAILS,
  FOOTER_CONFIG,
  FOOTER_LINKS,
} from '../constants/constants'
import AboutPage from '../pages/AboutPage'
import AccessDeniedPage from '../pages/AccessDeniedPage'
import AdminDashboardPage from '../pages/AdminDashboardPage'
import CartPage from '../pages/CartPage'
import CheckoutPage from '../pages/CheckoutPage'
import ContactPage from '../pages/ContactPage'
import PolicyPage from '../pages/PolicyPage'
import HomePage from '../pages/HomePage'
import ProductDetailPage from '../pages/ProductDetailPage'
import ProductsPage from '../pages/ProductsPage'
import ProtectedRoute from './ProtectedRoute'
import Footer from '@/components/Footer'
import PageTitle from './PageTitle'
import ImpactPage from '@/pages/ImpactPage'
import PartnerWithUsPage from '@/pages/PartnerWithUsPage'

function ScrollToTopOnNavigate() {
  const { pathname } = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    // Scroll to top on PUSH/REPLACE (forward navigation via links/buttons),
    // but NOT on POP (browser back/forward — let the browser restore scroll position)
    if (navigationType !== 'POP') {
      window.scrollTo(0, 0)
    }
  }, [pathname, navigationType])

  return null
}

function AppLayout() {
  return (
    <div className="page-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/impact" element={<ImpactPage />} />
          <Route path="/partner-with-us" element={<PartnerWithUsPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:productId" element={<ProductDetailPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/terms" element={<PolicyPage policyId="terms" />} />
          <Route path="/privacy" element={<PolicyPage policyId="privacy" />} />
          <Route path="/shipping-policy" element={<PolicyPage policyId="shipping-policy" />} />
          <Route path="/refund-policy" element={<PolicyPage policyId="refund-policy" />} />
          <Route path="/access-denied" element={<AccessDeniedPage />} />

          <Route
            path="/cart"
            element={
              <ProtectedRoute allowedRoles={['user', 'admin']}>
                <CartPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/checkout"
            element={
              <ProtectedRoute allowedRoles={['user', 'admin']}>
                <CheckoutPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboardPage />
              </ProtectedRoute>
            }
          />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default function AppRouter() {
  return (
    <BrowserRouter>
      <PageTitle />
      <ScrollToTopOnNavigate />
      <AppLayout />
    </BrowserRouter>
  )
}
