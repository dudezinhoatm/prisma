import { useState } from 'react'

export default function EditorPage() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#0d0d0f', color: '#e0e0e0', minHeight: '100vh', overflowX: 'hidden' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(13,13,15,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2a35', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <svg width="28" height="28" viewBox="0 0 18 18" fill="none">
            <polygon points="9,2 16,14 2,14" fill="none" stroke="#9b6dff" strokeWidth="1.5" strokeLinejoin="round"/>
            <polygon points="9,5 13.5,13 4.5,13" fill="rgba(124,92,191,0.3)" stroke="#7c5cbf" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 18, color: '#b08aff', letterSpacing: '-0.3px' }}>Prisma Visuals</span>
        </div>
        <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
          {['Features', 'Download', 'Contact'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} style={{ color: '#808080', textDecoration: 'none', fontSize: 14, fontWeight: 500, transition: 'color 0.15s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#e0e0e0')}
              onMouseLeave={e => (e.currentTarget.style.color = '#808080')}
            >{item}</a>
          ))}
          <a href="#download" style={{ padding: '8px 20px', background: '#9b6dff', color: 'white', borderRadius: 8, textDecoration: 'none', fontSize: 13, fontWeight: 700, transition: 'background 0.15s' }}
            onMouseEnter={e => (e.currentTarget.style.background = '#b08aff')}
            onMouseLeave={e => (e.currentTarget.style.background = '#9b6dff')}
          >Download Free</a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 140, paddingBottom: 80, textAlign: 'center', padding: '140px 32px 80px', background: 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)' }}>
        <div style={{ display: 'inline-block', padding: '4px 14px', background: 'rgba(155,109,255,0.12)', border: '1px solid rgba(155,109,255,0.3)', borderRadius: 20, fontSize: 12, color: '#9b6dff', fontWeight: 600, marginBottom: 24, letterSpacing: '0.5px' }}>
          FREE MOTION DESIGN STUDIO
        </div>
        <h1 style={{ fontSize: 'clamp(36px, 6vw, 72px)', fontWeight: 800, margin: '0 0 20px', lineHeight: 1.1, letterSpacing: '-1px' }}>
          Professional Video Editing<br />
          <span style={{ background: 'linear-gradient(135deg, #9b6dff, #b08aff)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Without the Price Tag
          </span>
        </h1>
        <p style={{ fontSize: 18, color: '#808080', maxWidth: 560, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Prisma Visuals is a powerful motion design editor with keyframe animation, effects, and real-time preview — completely free.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="#download" style={{ padding: '14px 32px', background: '#9b6dff', color: 'white', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#b08aff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#9b6dff'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            ⬇ Download for Windows
          </a>
          <a href="#features" style={{ padding: '14px 32px', background: 'transparent', color: '#b08aff', borderRadius: 10, textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid rgba(155,109,255,0.4)', transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(155,109,255,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See Features →
          </a>
        </div>
      </section>

      {/* EDITOR PREVIEW (iframe da versão web) */}
      <section style={{ padding: '0 32px 80px', maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ borderRadius: 16, overflow: 'hidden', border: '1px solid #2a2a35', boxShadow: '0 32px 80px rgba(0,0,0,0.6)', background: '#13131a' }}>
          {/* Fake titlebar */}
          <div style={{ height: 36, background: '#13131a', borderBottom: '1px solid #2a2a35', display: 'flex', alignItems: 'center', padding: '0 16px', gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
            <span style={{ marginLeft: 'auto', fontSize: 11, color: '#505060' }}>Prisma Visuals — Motion Studio</span>
          </div>
          <img
            src="/preview.png"
            alt="Prisma Visuals Editor Preview"
            style={{ width: '100%', display: 'block', objectFit: 'contain', background: '#0d0d0f' }}
          />
        </div>
        <p style={{ textAlign: 'center', color: '#505060', fontSize: 12, marginTop: 12 }}>
          Prisma Visuals running on Windows — real-time composition viewer with keyframe timeline
        </p>
      </section>

      {/* FEATURES */}
      <section id="features" style={{ padding: '80px 32px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <h2 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.5px' }}>
            Everything you need to create
          </h2>
          <p style={{ color: '#808080', fontSize: 16, maxWidth: 480, margin: '0 auto' }}>
            Professional-grade tools without the subscription fee.
          </p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {[
            { icon: '🎬', title: 'Keyframe Animation', desc: 'Animate any property with bezier curves, easing presets, and a full graph editor.' },
            { icon: '✨', title: '100+ Effects', desc: 'Blur, glow, color correction, chromatic aberration, film grain, and much more.' },
            { icon: '🎨', title: 'Shape & Text Layers', desc: 'Create vector shapes with the pen tool and animate text with character-level animators.' },
            { icon: '🎵', title: 'Audio Support', desc: 'Import audio tracks with waveform visualization and audio effects like reverb and EQ.' },
            { icon: '⚡', title: 'WebGL Accelerated', desc: 'GPU-powered effects pipeline for smooth real-time preview even on complex compositions.' },
            { icon: '📤', title: 'Export to MP4/WebM', desc: 'Render your compositions to MP4, WebM, GIF or PNG sequence with custom quality settings.' },
            { icon: '🎭', title: 'Blend Modes', desc: '16 blend modes including multiply, screen, overlay, color dodge and more.' },
            { icon: '🔗', title: 'Parenting & Expressions', desc: 'Link layers with parenting and drive properties with JavaScript expressions.' },
            { icon: '🖥️', title: 'Desktop App', desc: 'Native Electron app for Windows, Mac and Linux. Works offline, no subscription needed.' },
          ].map(f => (
            <div key={f.title} style={{ padding: 28, background: '#13131a', borderRadius: 12, border: '1px solid #2a2a35', transition: 'border-color 0.15s, transform 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,109,255,0.4)'; e.currentTarget.style.transform = 'translateY(-4px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a35'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: 32, marginBottom: 12 }}>{f.icon}</div>
              <h3 style={{ margin: '0 0 8px', fontSize: 16, fontWeight: 700, color: '#e0e0e0' }}>{f.title}</h3>
              <p style={{ margin: 0, color: '#808080', fontSize: 14, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DOWNLOAD */}
      <section id="download" style={{ padding: '80px 32px', textAlign: 'center', background: 'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)' }}>
        <h2 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.5px' }}>
          Download Prisma Visuals
        </h2>
        <p style={{ color: '#808080', fontSize: 16, maxWidth: 440, margin: '0 auto 40px', lineHeight: 1.6 }}>
          Free forever. No account required. Available for Windows, Mac and Linux.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { os: '🪟 Windows', ext: '.exe' },
            { os: '🍎 macOS', ext: '.dmg' },
            { os: '🐧 Linux', ext: '.AppImage' },
          ].map(d => (
            <a key={d.os} href="#" style={{ padding: '14px 28px', background: '#13131a', color: '#e0e0e0', borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 600, border: '1px solid #2a2a35', display: 'flex', alignItems: 'center', gap: 8, transition: 'all 0.15s' }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,109,255,0.5)'; e.currentTarget.style.background = 'rgba(155,109,255,0.08)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a35'; e.currentTarget.style.background = '#13131a' }}
            >
              {d.os} <span style={{ color: '#505060', fontSize: 12 }}>{d.ext}</span>
            </a>
          ))}
        </div>
        <p style={{ color: '#505060', fontSize: 12, marginTop: 24 }}>
          Latest version • Free • No ads in the editor
        </p>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: '80px 32px', maxWidth: 700, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 36, fontWeight: 800, margin: '0 0 16px', letterSpacing: '-0.5px' }}>
          Get in touch
        </h2>
        <p style={{ color: '#808080', fontSize: 16, margin: '0 0 40px', lineHeight: 1.6 }}>
          Have questions, found a bug, or want to suggest a feature? Reach out — we'd love to hear from you.
        </p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a
            href="https://discord.gg/gnswbmaQTH"
            target="_blank"
            rel="noopener noreferrer"
            style={{ padding: '14px 28px', background: '#5865F2', color: 'white', borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.background = '#6d78f5'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.background = '#5865F2'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.022.015.043.032.054a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/></svg>
            Join our Discord
          </a>
          <a
            href="mailto:mickaelff3@gmail.com"
            style={{ padding: '14px 28px', background: '#13131a', color: '#e0e0e0', borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 600, border: '1px solid #2a2a35', display: 'flex', alignItems: 'center', gap: 10, transition: 'all 0.15s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(155,109,255,0.5)'; e.currentTarget.style.background = 'rgba(155,109,255,0.08)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#2a2a35'; e.currentTarget.style.background = '#13131a'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            mickaelff3@gmail.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #2a2a35', padding: '32px', textAlign: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, marginBottom: 12 }}>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <polygon points="9,2 16,14 2,14" fill="none" stroke="#9b6dff" strokeWidth="1.5" strokeLinejoin="round"/>
            <polygon points="9,5 13.5,13 4.5,13" fill="rgba(124,92,191,0.3)" stroke="#7c5cbf" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontWeight: 700, color: '#b08aff', fontSize: 14 }}>Prisma Visuals</span>
        </div>
        <p style={{ color: '#505060', fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} Prisma Visuals. Free and open source motion design studio.
        </p>
        <div style={{ display: 'flex', gap: 24, justifyContent: 'center', marginTop: 16 }}>
          <a href="https://discord.gg/gnswbmaQTH" target="_blank" rel="noopener noreferrer" style={{ color: '#505060', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9b6dff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#505060')}
          >Discord</a>
          <a href="mailto:mickaelff3@gmail.com" style={{ color: '#505060', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9b6dff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#505060')}
          >Email</a>
          <a href="/privacy" style={{ color: '#505060', fontSize: 12, textDecoration: 'none' }}
            onMouseEnter={e => (e.currentTarget.style.color = '#9b6dff')}
            onMouseLeave={e => (e.currentTarget.style.color = '#505060')}
          >Privacy Policy</a>
        </div>
      </footer>
    </div>
  )
}
