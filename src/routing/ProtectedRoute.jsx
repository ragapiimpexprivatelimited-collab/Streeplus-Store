import { Navigate, useLocation } from 'react-router-dom'
import useAuthStore from '../store/useAuthStore'

export default function ProtectedRoute({ allowedRoles, children }) {
  const role = useAuthStore((state) => state.role)
  const location = useLocation()

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/access-denied" replace state={{ from: location }} />
  }

  return children
}
