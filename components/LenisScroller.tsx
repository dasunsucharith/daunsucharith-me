'use client'

import { useEffect } from 'react'
import Lenis from 'lenis'

const LenisScroller = () => {
  useEffect(() => {
    // Respect user motion preferences
    if (typeof window !== 'undefined' &&
        window.matchMedia &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId: number | null = null
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }

    rafId = requestAnimationFrame(raf)

    const onVisibility = () => {
      if (document.hidden) {
        if (rafId) cancelAnimationFrame(rafId)
        lenis.stop()
      } else {
        lenis.start()
        rafId = requestAnimationFrame(raf)
      }
    }
    document.addEventListener('visibilitychange', onVisibility, { passive: true } as any)

    return () => {
      document.removeEventListener('visibilitychange', onVisibility as any)
      if (rafId) cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])

  return null
}

export default LenisScroller
