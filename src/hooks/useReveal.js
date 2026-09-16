import { useEffect, useRef, useState } from 'react'

// Adds a "reveal on scroll" class once an element enters the viewport.
// Usage: const { ref, revealed } = useReveal()
//        <div ref={ref} className={revealed ? 'reveal-in' : 'reveal-out'}>
export default function useReveal(options = { threshold: 0.2 }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return undefined

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setRevealed(true)
      return undefined
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setRevealed(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)
    return () => observer.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, revealed }
}