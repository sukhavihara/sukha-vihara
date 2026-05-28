'use client'
import { useState, useEffect } from 'react'

const SHOP_URL = 'https://sukha-glory-2.myshopify.com/'

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: scrolled ? 'rgba(245,240,232,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(196,181,160,0.3)' : 'none',
      transition: 'all 0.4s ease',
      padding: '0 60px',
      height: '72px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    }}>
      <a href="/" style={{
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        fontSize: '22px', fontWeight: 300, letterSpacing: '0.08em',
        color: '#2D2D2D',
      }}>
        Sukha Vihara
      </a>

      <div style={{ display: 'flex', gap: '48px', alignItems: 'center' }}>
        {[
          { label: 'Home', href: '#' },
          { label: 'Philosophy', href: '#philosophy' },
          { label: 'Shop', href: '#products' },
          { label: 'Contact', href: '#footer' },
        ].map(({ label, href }) => (
          <a key={label} href={href} style={{
            fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
            color: '#7A6E65', fontWeight: 300,
            transition: 'color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.color = '#2D2D2D')}
          onMouseLeave={e => (e.currentTarget.style.color = '#7A6E65')}
          >
            {label}
          </a>
        ))}
        <a href={SHOP_URL} target="_blank" style={{
          fontSize: '11px', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#2D2D2D', fontWeight: 400, padding: '8px 20px',
          border: '1px solid #C4B5A0',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = '#2D2D2D'; e.currentTarget.style.color = '#F5F0E8' }}
        onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#2D2D2D' }}
        >
          Shop
        </a>
      </div>
    </nav>
  )
}
