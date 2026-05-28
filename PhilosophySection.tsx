export default function PhilosophySection() {
  return (
    <section id="philosophy" style={{
      width: '100%', background: '#F5F0E8',
      padding: '40px 0 80px',
      fontFamily: "'Inter', sans-serif",
      position: 'relative', overflow: 'hidden',
    }}>
      {/* top divider line */}
      <div style={{
        position: 'absolute', top: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '1px', height: '80px',
        background: 'linear-gradient(to bottom, transparent, rgba(196,181,160,0.5))',
      }} />

      <div style={{
        maxWidth: '1100px', margin: '0 auto', padding: '0 60px',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: '80px', alignItems: 'center',
      }}>
        {/* Left: text */}
        <div>
          <p style={{
            fontSize: '10px', letterSpacing: '0.4em', textTransform: 'uppercase',
            color: '#9B8B7A', marginBottom: '24px', fontWeight: 300,
          }}>
            Our Philosophy
          </p>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: 300,
            lineHeight: 1.15, color: '#2D2D2D', margin: '0 0 8px',
          }}>
            Wellness that
          </h2>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(38px, 4vw, 56px)', fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.15, color: '#9B8B7A', margin: '0 0 40px',
          }}>
            feels like rest.
          </h2>
          <p style={{
            fontSize: '15px', lineHeight: 1.9, color: '#7A6E65',
            fontWeight: 300, marginBottom: '24px',
          }}>
            Sukha Vihara was born from a simple belief: healing should feel like a gift to yourself,
            not a task to complete. We draw from centuries of Eastern wellness tradition — the gentle
            art of gua sha, the ritual of touch — and reimagine it for the modern woman.
          </p>
          <p style={{
            fontSize: '15px', lineHeight: 1.9, color: '#7A6E65',
            fontWeight: 300, marginBottom: '48px',
          }}>
            Not a regimen. A ritual. Something you look forward to at the end of the day.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '40px', height: '1px', background: '#C4B5A0' }} />
            <p style={{
              fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase',
              color: '#9B8B7A', fontWeight: 300,
            }}>
              Soft rituals for feminine wellbeing
            </p>
          </div>
        </div>

        {/* Right: decorative panel */}
        <div style={{
          background: 'linear-gradient(145deg, #EDE5DA 0%, #D6C9B8 100%)',
          padding: '70px 50px',
          position: 'relative', overflow: 'hidden',
        }}>
          {/* decorative circle */}
          <div style={{
            position: 'absolute', bottom: '-60px', right: '-60px',
            width: '200px', height: '200px', borderRadius: '50%',
            border: '1px solid rgba(196,181,160,0.3)',
          }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(22px, 2.5vw, 28px)', fontWeight: 300, fontStyle: 'italic',
            lineHeight: 1.6, color: '#2D2D2D', textAlign: 'center',
            position: 'relative', zIndex: 1,
          }}>
            "Healing begins at night — in the quiet, in the ritual, in the softness of your own hands."
          </p>
          <div style={{
            width: '40px', height: '1px', background: '#C4B5A0',
            margin: '32px auto 0',
          }} />
        </div>
      </div>
    </section>
  )
}
