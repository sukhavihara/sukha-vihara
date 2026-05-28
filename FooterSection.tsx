const SHOP_URL = 'https://sukha-glory-2.myshopify.com/'

export default function FooterSection() {
  return (
    <footer id="footer" style={{
      width: '100%',
      background: '#2D2D2D',
      padding: '80px 0 40px',
      fontFamily: "'Inter', sans-serif",
      color: '#F5F0E8',
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
        {/* top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: '60px',
          marginBottom: '64px',
        }}>
          {/* brand */}
          <div>
            <h3 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '28px', fontWeight: 300, letterSpacing: '0.05em',
              color: '#F5F0E8', marginBottom: '16px',
            }}>
              Sukha Vihara
            </h3>
            <p style={{
              fontSize: '13px', lineHeight: 1.85, color: 'rgba(245,240,232,0.5)',
              fontWeight: 300, maxWidth: '260px',
            }}>
              Eastern wellness rituals, reimagined for the modern woman. A softer end to the day.
            </p>
          </div>

          {/* shop */}
          <div>
            <p style={{
              fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)', marginBottom: '20px', fontWeight: 300,
            }}>
              Shop
            </p>
            {['All Products', 'Gua Sha', 'Facial Oils', 'Ritual Kits', 'Gift Sets'].map(item => (
              <a key={item} href={SHOP_URL} target="_blank" style={{
                display: 'block', fontSize: '13px', color: 'rgba(245,240,232,0.65)',
                fontWeight: 300, marginBottom: '12px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.65)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* about */}
          <div>
            <p style={{
              fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)', marginBottom: '20px', fontWeight: 300,
            }}>
              About
            </p>
            {['Our Story', 'Philosophy', 'Ingredients', 'Sustainability'].map(item => (
              <a key={item} href="#philosophy" style={{
                display: 'block', fontSize: '13px', color: 'rgba(245,240,232,0.65)',
                fontWeight: 300, marginBottom: '12px', transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#F5F0E8')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.65)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* newsletter */}
          <div>
            <p style={{
              fontSize: '10px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)', marginBottom: '20px', fontWeight: 300,
            }}>
              The Ritual Letter
            </p>
            <p style={{
              fontSize: '13px', lineHeight: 1.7, color: 'rgba(245,240,232,0.5)',
              fontWeight: 300, marginBottom: '20px',
            }}>
              Soft notes on ritual, rest, and the art of slowing down.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: 'rgba(245,240,232,0.08)',
                  border: '1px solid rgba(245,240,232,0.15)',
                  padding: '11px 16px', color: '#F5F0E8',
                  fontSize: '12px', outline: 'none',
                  fontFamily: "'Inter', sans-serif",
                }}
              />
              <button style={{
                background: '#C4B5A0', color: '#2D2D2D',
                border: 'none', padding: '11px',
                fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase',
                cursor: 'pointer', fontFamily: "'Inter', sans-serif",
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* divider */}
        <div style={{ height: '1px', background: 'rgba(245,240,232,0.1)', marginBottom: '32px' }} />

        {/* bottom */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{
            fontSize: '11px', color: 'rgba(245,240,232,0.3)',
            fontWeight: 300, letterSpacing: '0.05em',
          }}>
            © 2025 Sukha Vihara. All rights reserved.
          </p>
          <p style={{
            fontSize: '11px', color: 'rgba(245,240,232,0.3)',
            fontWeight: 300, letterSpacing: '0.3em', textTransform: 'uppercase',
          }}>
            Soft Ritual Living
          </p>
        </div>
      </div>
    </footer>
  )
}
