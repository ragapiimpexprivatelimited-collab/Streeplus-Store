import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ArrowRight, ChevronDown, MapPin, Menu, ShoppingCart } from 'lucide-react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { cn } from '@/lib/utils'
import {
  COMPANY_INFO,
  CONTACT_DETAILS,
  NAV_ITEMS,
  NAVBAR_CONFIG,
} from '../constants/constants'
import useAuthStore from '../store/useAuthStore'
import useCartStore from '../store/useCartStore'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const cartCount = useCartStore((state) => state.getCartCount())
  const role = useAuthStore((state) => state.role)
  const setRole = useAuthStore((state) => state.setRole)

  const items = NAV_ITEMS.filter((item) =>
    role === 'admin' ? true : item.path !== '/admin'
  )

  const linkClass = ({ isActive }) =>
    cn(
      'rounded-full px-3.5 py-2 font-mono text-[12px] text-stone-600 transition hover:bg-stone-200 hover:text-stone-900',
      isActive && 'bg-stone-200 text-stone-900'
    )

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/85 backdrop-blur">
      <div className="mx-auto flex max-w-full items-center justify-between gap-4 px-5 py-3">
        {/* Brand */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-2.5"
          onClick={() => setMobileOpen(false)}
        >
          <img
            src="/ragapiimpex_logo.svg"
            alt={COMPANY_INFO.shortName}
            className="h-9 w-9 object-contain"
          />
          <span className="flex flex-col leading-tight">
            <b className="text-[15px] font-bold tracking-tight text-stone-900">
              {COMPANY_INFO.shortName}
            </b>
            <small className="font-mono text-[9.5px] uppercase tracking-widest text-emerald-800">
              {COMPANY_INFO.tagline}
            </small>
          </span>
        </Link>

        {/* Desktop nav pill */}
        <nav
          className="hidden items-center gap-0.5 rounded-full border border-stone-200 bg-white p-1 shadow-sm md:flex"
          aria-label="Main navigation"
        >
          {items.map((item) => {
            const hasChildren = Array.isArray(item.children) && item.children.length > 0
            const isStoreWithEmptyList =
              Array.isArray(item.children) && item.children.length === 0

            if (!hasChildren) {
              // When an item that normally lists products has no items available,
              // fall back to the full products catalogue instead of an empty menu.
              const destination = isStoreWithEmptyList ? '/products' : item.path

              return (
                <NavLink
                  key={item.path}
                  to={destination}
                  end={destination === '/'}
                  className={linkClass}
                >
                  {item.label}
                </NavLink>
              )
            }

            return (
              <DropdownMenu key={item.path}>
                <DropdownMenuTrigger asChild openOnHover closeDelay={100}>
                  <button className="flex items-center gap-1.5 rounded-full bg-emerald-700 px-1 py-1 font-mono text-[12px] text-white transition hover:bg-emerald-900 data-[state=open]:bg-emerald-900">
                    {item.label}
                    <ChevronDown size={13} />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="center"
                  sideOffset={12}
                  className="w-[340px] rounded-2xl border-stone-200 p-2 shadow-xl"
                >
                  {item.children.map((child) => (
                    <DropdownMenuItem key={child.path} asChild>
                      <Link
                        to={child.path}
                        className="flex cursor-pointer flex-col items-start gap-0.5 rounded-lg border-l-2 border-transparent px-3 py-2.5 focus:border-emerald-600 focus:bg-stone-50"
                      >
                        {child.tag && (
                          <span className="font-mono text-[10px] tracking-wide text-emerald-800">
                            {child.tag}
                          </span>
                        )}
                        <span className="text-[13px] font-medium text-stone-900">
                          {child.label}
                        </span>
                        {child.note && (
                          <span className="text-[11px] text-stone-500">{child.note}</span>
                        )}
                      </Link>
                    </DropdownMenuItem>
                  ))}

                  <DropdownMenuSeparator className="my-1.5" />

                  <DropdownMenuItem asChild>
                    <Link
                      to="/products"
                      className="flex cursor-pointer items-center justify-between gap-2 rounded-lg bg-emerald-600 px-3 py-2.5 font-semibold text-white transition hover:bg-emerald-700 focus:bg-emerald-700"
                    >
                      <span className="text-[13px]">All Products</span>
                      <ArrowRight size={14} />
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="flex shrink-0 items-center gap-2">
                    {/* Location link removed per request */}

          {/* User/Admin role switcher commented out per request
          {NAVBAR_CONFIG.showRoleSwitcher ? (
            <Select value={role} onValueChange={setRole}>
              <SelectTrigger
                aria-label="Set demo role"
                className="hidden h-9 w-[92px] rounded-full border-stone-200 bg-white text-[11px] font-mono lg:flex"
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          ) : null}
          */}

          <Button
            variant="outline"
            size="icon"
            className="relative rounded-full border-stone-200 bg-white"
            aria-label="Cart overview"
            asChild
          >
            <Link to="/cart">
              <ShoppingCart size={17} />
              {cartCount > 0 && (
                <Badge className="absolute -right-1 -top-1 h-[17px] min-w-[17px] justify-center rounded-full border-2 border-stone-50 bg-rose-500 p-0 text-[10px] hover:bg-rose-500">
                  {cartCount}
                </Badge>
              )}
            </Link>
          </Button>

          <Button
            asChild
            className="hidden rounded-full bg-emerald-700 px-5 text-[13px] font-semibold shadow-md shadow-emerald-900/20 hover:bg-emerald-900 sm:inline-flex"
          >
            <Link to="/contact">Book a call</Link>
          </Button>

          {/* Mobile menu */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border-stone-200 bg-white md:hidden"
                aria-label="Toggle navigation menu"
              >
                <Menu size={18} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-stone-50">
              <div className="mt-8 flex flex-col gap-1">
                {items.map((item) => {
                  const hasChildren = Array.isArray(item.children) && item.children.length > 0

                  if (!hasChildren) {
                    return (
                      <NavLink
                        key={item.path}
                        to={item.path}
                        end={item.path === '/'}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          cn(
                            'rounded-lg px-3 py-2.5 font-mono text-sm text-stone-700 hover:bg-stone-100',
                            isActive && 'bg-stone-100 text-stone-900'
                          )
                        }
                      >
                        {item.label}
                      </NavLink>
                    )
                  }

                  return (
                    <div key={item.path} className="mt-1">
                      <div className="rounded-lg bg-stone-900 px-3 py-2.5 font-mono text-sm text-white">
                        {item.label}
                      </div>
                      <div className="mt-1 flex flex-col gap-1 pl-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            onClick={() => setMobileOpen(false)}
                            className="rounded-lg border-l-2 border-transparent py-2 pl-3 text-[13px] text-stone-700 hover:border-emerald-600 hover:bg-stone-100"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )
                })}

                <a
                  href={CONTACT_DETAILS.mapDirectionsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex items-center gap-2 rounded-lg border border-stone-200 bg-white px-3 py-2.5 text-sm text-stone-800"
                >
                  <MapPin size={16} className="text-emerald-700" />
                  {NAVBAR_CONFIG.mapLinkLabel} — {CONTACT_DETAILS.navLocationLabel}
                </a>

                <Button asChild className="mt-2 rounded-full bg-emerald-700 hover:bg-emerald-900">
                  <Link to="/contact" onClick={() => setMobileOpen(false)}>
                    Book a call
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}