import { useEffect, useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'

// Counts up from 0 to `value` once it scrolls into view.
// value: number, e.g. 76.15
// suffix: string appended after the number, e.g. '%'
// prefix: string prepended before the number, e.g. '1 in '
export default function AnimatedCounter({
  value,
  suffix = '',
  prefix = '',
  duration = 1400,
  decimals,
}) {
  const { ref, revealed } = useReveal({ threshold: 0.4 })
  const [display, setDisplay] = useState(0)
  const startedRef = useRef(false)
  const decimalPlaces = decimals ?? (Number.isInteger(value) ? 0 : 2)

  useEffect(() => {
    if (!revealed || startedRef.current) return undefined
    startedRef.current = true

    const startTime = performance.now()
    let frame

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - (1 - progress) * (1 - progress) // ease-out quad
      setDisplay(value * eased)
      if (progress < 1) {
        frame = requestAnimationFrame(tick)
      } else {
        setDisplay(value)
      }
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [revealed, value, duration])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {display.toFixed(decimalPlaces)}
      {suffix}
    </span>
  )
}