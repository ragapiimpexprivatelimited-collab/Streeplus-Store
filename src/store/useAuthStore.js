import { create } from 'zustand'

const defaultRole = 'user'

const useAuthStore = create((set) => ({
  role: defaultRole,
  isAuthenticated: true,
  setRole: (role) =>
    set({
      role,
      isAuthenticated: role === 'guest' ? false : true,
    }),
  logout: () =>
    set({
      role: 'guest',
      isAuthenticated: false,
    }),
}))

export default useAuthStore
