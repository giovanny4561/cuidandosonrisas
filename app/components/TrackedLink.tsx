'use client'

import { track } from '@vercel/analytics'
import type { ReactNode, MouseEvent } from 'react'

interface TrackedLinkProps {
  href: string
  event: string
  className?: string
  target?: string
  rel?: string
  children: ReactNode
}

export default function TrackedLink({ href, event, className, target, rel, children }: TrackedLinkProps) {
  function handleClick(e: MouseEvent<HTMLAnchorElement>) {
    track(event, { href, timestamp: new Date().toISOString() })
  }

  return (
    <a href={href} className={className} target={target} rel={rel} onClick={handleClick}>
      {children}
    </a>
  )
}
