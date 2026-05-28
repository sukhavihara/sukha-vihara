const SHOP_URL = 'https://sukha-glory-2.myshopify.com/'

const products = [
  {
    id: 1,
    name: 'Rose Quartz Gua Sha',
    subtitle: 'Facial Sculpting Ritual',
    price: '$48',
    tag: 'Bestseller',
    color: '#EDE5DA',
  },
  {
    id: 2,
    name: 'Jade Roller Set',
    subtitle: 'Morning Lymphatic Ritual',
    price: '$62',
    tag: 'New',
    color: '#D6C9B8',
  },
  {
    id: 3,
    name: 'Golden Facial Oil',
    subtitle: 'Nourishing Evening Elixir',
    price: '$78',
    tag: null,
    color: '#C9B8A4',
  },
  {
    id: 4,
    name: 'The Night Ritual Kit',
    subtitle: 'Complete Evening Practice',
    price: '$145',
    tag: 'Most Loved',
    color: '#BBA896',
  },
]

export default function ProductSection() {
  return (
    <section id="products" style={{
      width: '100%', background: '#F5F0E8',
      padding: '60px 0 100px',
      fontFamily: "'Inter', sans-serif",
    }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 60px' }}>
        {/* header */}
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <p style={{
            fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase',
            color: '#9B8B7A', marginBottom: '20px', fontWeight: 300,
          }}>
            The Collection
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(38px, 4vw, 52px)', fontWeight: 300,
            lineHeight: 1.15, color: '#2D2D2D', margin: '0 0 8px',
          }}>
            The Ritual
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(38px, 4vw, 52px)', fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.15, color: '#9B8B7A', margin: '0 0 24px',
          }}>
            Collection
          </h2>
          <p style={{
            fontSize: '14px', lineHeight: 1.9, color: '#7A6E65',
            maxWidth: '400px', margin: '0 auto', fontWeight: 300,
          }}>
            Each piece is chosen to slow you down, to bring you home to your body.
          </p>
        </div>

        {/* product grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '24px',
          marginBottom: '56px',
        }}>
          {products.map((product) => (
            <a
              key={product.id}
              href={SHOP_URL}
              target="_blank"
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{ cursor: 'pointer', transition: 'transform 0.3s ease' }}
                onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-4px)')}
                onMouseLeave={e => (e.currentTarget.style.transform = 'translateY(0)')}
              >
                {/* product image placeholder */}
                <div style={{
                  background: product.color,
                  aspectRatio: '3/4',
                  marginBottom: '20px',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {product.tag && (
                    <div style={{
                      position: 'absolute', top: '16px', left: '16px',
                      background: '#2D2D2D', color: '#F5F0E8',
                      fontSize: '9px', letterSpacing: '0.2em', textTransform: 'uppercase',
                      padding: '5px 12px',
                    }}>
                      {product.tag}
                    </div>
                  )}
                  {/* subtle inner pattern */}
                  <div style={{
                    position: 'absolute', bottom: '-30px', right: '-30px',
                    width: '120px', height: '120px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.4)',
                  }} />
                  <div style={{
                    position: 'absolute', bottom: '-50px', right: '-50px',
                    width: '180px', height: '180px', borderRadius: '50%',
                    border: '1px solid rgba(255,255,255,0.2)',
                  }} />
                </div>

                {/* product info */}
                <p style={{
                  fontSize: '10px', letterSpacing: '0.25em', textTransform: 'uppercase',
                  color: '#9B8B7A', marginBottom: '6px', fontWeight: 300,
                }}>
                  {product.subtitle}
                </p>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '20px', fontWeight: 300,
                  color: '#2D2D2D', marginBottom: '8px',
                }}>
                  {product.name}
                </h3>
                <p style={{
                  fontSize: '14px', color: '#7A6E65', fontWeight: 300,
                }}>
                  {product.price}
                </p>
              </div>
            </a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: 'center' }}>
          <a href={SHOP_URL} target="_blank" style={{
            display: 'inline-block',
            padding: '16px 52px', background: '#2D2D2D', color: '#F5F0E8',
            fontSize: '11px', letterSpacing: '0.25em', textTransform: 'uppercase',
            transition: 'opacity 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.opacity = '0.85')}
          onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
          >
            View All Products
          </a>
        </div>
      </div>
    </section>
  )
}
