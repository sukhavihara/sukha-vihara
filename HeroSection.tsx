const SHOP_URL = 'https://sukha-glory-2.myshopify.com/'

export default function HeroSection() {
  return (
    <section style={{
      width: '100%', background: '#F5F0E8',
      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
      padding: '160px 40px 100px',
      position: 'relative', overflow: 'hidden',
      fontFamily: "'Inter', sans-serif",
    }}>
      {/* radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '700px', height: '700px',
        background: 'radial-gradient(ellipse at center, rgba(196,181,160,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '520px', height: '520px', borderRadius: '50%',
        border: '1px solid rgba(196,181,160,0.12)',
        pointerEvents: 'none',
      }} />

      <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', maxWidth: '680px' }}>
        <p style={{
          fontSize: '11px', letterSpacing: '0.38em', textTransform: 'uppercase',
          color: '#9B8B7A', marginBottom: '32px', fontWeight: 300,
        }}>
          Soft Ritual Living · Eastern Wellness
        </p>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(52px, 7vw, 84px)', fontWeight: 300,
          lineHeight: 1.05, color: '#2D2D2D', margin: '0 0 4px',
        }}>
          Healing begins
        </h1>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: 'clamp(52px, 7vw, 84px)', fontWeight: 300, fontStyle: 'italic',
          lineHeight: 1.1, color: '#9B8B7A', margin: '0 0 36px',
        }}>
          at night.
        </h1>

        <p style={{
          fontSize: '15px', lineHeight: 1.85, color: '#7A6E65',
          maxWidth: '420px', margin: '0 auto 52px', fontWeight: 300,
        }}>
          Eastern wellness rituals, reimagined for the modern woman. A softer end to the day.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={SHOP_URL} target="_blank" style={{
            padding: '15px 38px', background: '#2D2D2D', color: '#F5F0E8',
            fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            Shop the Rituals
          </a>
          <a href="#philosophy" style={{
            padding: '15px 38px', border: '1px solid #C4B5A0', color: '#7A6E65',
            fontSize: '11px', letterSpacing: '0.22em', textTransform: 'uppercase',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = '#C4B5A0'; e.currentTarget.style.color = '#fff' }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#7A6E65' }}
          >
            Our Story
          </a>
        </div>

        <p style={{
          marginTop: '64px', fontSize: '10px', letterSpacing: '0.3em',
          color: 'rgba(122,110,101,0.4)', textTransform: 'uppercase',
        }}>
          ↓ &nbsp; scroll
        </p>
      </div>
    </section>
  )
}
