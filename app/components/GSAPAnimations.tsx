'use client'

import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

export default function GSAPAnimations() {
  useEffect(() => {
    // Respect prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      // ── HERO ENTRANCE ──────────────────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })

      tl.from('[data-gsap="hero-title"]', {
        y: 80,
        opacity: 0,
        duration: 1.1,
      })
        .from('[data-gsap="hero-body"]', { y: 40, opacity: 0, duration: 0.9 }, '-=0.6')
        .from('[data-gsap="hero-buttons"] > *', {
          y: 24,
          opacity: 0,
          stagger: 0.12,
          duration: 0.7,
          clearProps: 'opacity,transform',
        }, '-=0.5')
        .from('[data-gsap="hero-card"]', {
          x: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')

      // ── SECTION HEADINGS ───────────────────────────────────────
      gsap.utils.toArray<Element>('[data-gsap="fade-up"]').forEach((el) => {
        gsap.from(el, {
          y: 50,
          opacity: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── STAGGER GRIDS (cards, tags, list items) ────────────────
      gsap.utils.toArray<Element>('[data-gsap="stagger"]').forEach((container) => {
        const items = container.querySelectorAll('[data-gsap="stagger-item"]')
        if (!items.length) return
        gsap.from(items, {
          y: 45,
          opacity: 0,
          duration: 0.65,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: container,
            start: 'top 82%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── STATS ──────────────────────────────────────────────────
      gsap.utils.toArray<Element>('[data-gsap="stat"]').forEach((el) => {
        gsap.from(el, {
          scale: 0.7,
          opacity: 0,
          duration: 0.8,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── BLOCKQUOTES ────────────────────────────────────────────
      gsap.utils.toArray<Element>('blockquote').forEach((el) => {
        gsap.from(el, {
          x: -30,
          opacity: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── IMAGES ─────────────────────────────────────────────────
      gsap.utils.toArray<Element>('[data-gsap="img"]').forEach((el) => {
        gsap.from(el, {
          opacity: 0,
          scale: 1.04,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            toggleActions: 'play none none none',
          },
        })
      })

      // ── DECORATIVE LINE ────────────────────────────────────────
      gsap.utils.toArray<Element>('[data-gsap="line"]').forEach((el) => {
        gsap.from(el, {
          scaleX: 0,
          transformOrigin: 'left center',
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 90%',
            toggleActions: 'play none none none',
          },
        })
      })
    })

    // ── SMOOTH ANCHOR SCROLL ───────────────────────────────────
    const anchorLinks = document.querySelectorAll<HTMLAnchorElement>('a[href^="#"]')
    const handleAnchorClick = (e: Event) => {
      const anchor = e.currentTarget as HTMLAnchorElement
      const target = document.querySelector(anchor.getAttribute('href') as string)
      if (!target) return
      e.preventDefault()
      gsap.to(window, {
        duration: 1.1,
        scrollTo: { y: target, offsetY: 72 },
        ease: 'power3.inOut',
      })
    }
    anchorLinks.forEach((a) => a.addEventListener('click', handleAnchorClick))

    return () => {
      ctx.revert()
      anchorLinks.forEach((a) => a.removeEventListener('click', handleAnchorClick))
    }
  }, [])

  return null
}
