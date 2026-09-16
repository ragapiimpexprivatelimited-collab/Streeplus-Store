export const publicRoutes = [
  { path: '/', element: 'HomePage' },
  { path: '/about', element: 'AboutPage' },
  { path: '/services', element: 'ServicesPage' },
  { path: '/projects', element: 'ProjectsPage' },
  { path: '/products', element: 'ProductsPage' },
  { path: '/products/:productId', element: 'ProductDetailPage' },
  { path: '/contact', element: 'ContactPage' },
  { path: '/access-denied', element: 'AccessDeniedPage' },
]

export const userRoutes = [
  { path: '/cart', element: 'CartPage' },
  { path: '/checkout', element: 'CheckoutPage' },
]

export const adminRoutes = [{ path: '/admin', element: 'AdminDashboardPage' }]
