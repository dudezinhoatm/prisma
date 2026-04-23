import { useEffect, useState, useRef } from 'react'

const AD_DURATION = 30 // segundos

// Pega o token da URL: /export?token=abc123
function getToken() {
  return new URLSearchParams(window.location.search).get('token') ?? ''
}

export default function ExportPage() {
  const [timeLeft, setTimeLeft] = useState(AD_DURATION)
  const [canContinue, setCanContinue] = useState(false)
  const [done, setDone] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const token = getToken()

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(intervalRef.current!)
          setCanContinue(true)
          return 0
        }
        return t - 1
      })
    }, 1000)
    return () => clearInterval(intervalRef.current!)
  }, [])

  // Injeta o script do AdSense uma vez
  useEffect(() => {
    if (document.getElementById('adsense-script')) return
    const script = document.createElement('script')
    script.id = 'adsense-script'
    script.async = true
    // SUBSTITUA pelo seu ID do AdSense
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1214849919595378'
    script.crossOrigin = 'anonymous'
    document.head.appendChild(script)
  }, [])

  async function handleContinue() {
    if (!canContinue) return
    setDone(true)

    // Notifica o app desktop que o anúncio foi assistido
    try {
      await fetch(`/api/export-ready`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token }),
      })
    } catch {
      // Se falhar, o app tem fallback por timeout
    }

    // Fecha a janela (funciona quando aberta pelo Electron)
    window.close()
  }

  if (done) {
    return (
      <div style={styles.container}>
        <div style={styles.doneBox}>
          <div style={{ fontSize: 32 }}>✓</div>
          <p style={{ color: '#3ecf8e', fontSize: 16, margin: '8px 0 0' }}>
            Export iniciado!
          </p>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <svg width="20" height="20" viewBox="0 0 18 18" fill="none">
          <polygon points="9,2 16,14 2,14" fill="none" stroke="#9b6dff" strokeWidth="1.5" strokeLinejoin="round"/>
          <polygon points="9,5 13.5,13 4.5,13" fill="rgba(124,92,191,0.3)" stroke="#7c5cbf" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
        <span style={{ color: '#b08aff', fontWeight: 700, fontSize: 14 }}>Prisma Visuals</span>
        <span style={{ color: '#505060', fontSize: 12, marginLeft: 'auto' }}>
          Preparando export...
        </span>
      </div>

      {/* Slot do AdSense — substitua data-ad-slot pelo seu */}
      <div style={styles.adContainer}>
        <ins
          className="adsbygoogle"
          style={{ display: 'block', width: '100%', height: '250px' }}
          data-ad-client="ca-pub-1214849919595378"
          data-ad-slot="XXXXXXXXXX"
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        <script dangerouslySetInnerHTML={{ __html: '(adsbygoogle = window.adsbygoogle || []).push({});' }} />
      </div>

      {/* Timer e botão */}
      <div style={styles.footer}>
        {!canContinue ? (
          <div style={styles.timerBox}>
            <div style={styles.timerRing}>
              <svg width="64" height="64" viewBox="0 0 64 64">
                <circle cx="32" cy="32" r="28" fill="none" stroke="#2a2a35" strokeWidth="4"/>
                <circle
                  cx="32" cy="32" r="28"
                  fill="none" stroke="#9b6dff" strokeWidth="4"
                  strokeDasharray={`${2 * Math.PI * 28}`}
                  strokeDashoffset={`${2 * Math.PI * 28 * (timeLeft / AD_DURATION)}`}
                  strokeLinecap="round"
                  transform="rotate(-90 32 32)"
                  style={{ transition: 'stroke-dashoffset 1s linear' }}
                />
                <text x="32" y="37" textAnchor="middle" fill="#e0e0e0" fontSize="16" fontWeight="700">
                  {timeLeft}
                </text>
              </svg>
            </div>
            <p style={{ color: '#808080', fontSize: 12, margin: '8px 0 0' }}>
              Aguarde para continuar o export
            </p>
          </div>
        ) : (
          <button onClick={handleContinue} style={styles.continueBtn}>
            ▶ Continuar Export
          </button>
        )}
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    width: '100vw',
    height: '100vh',
    background: '#0d0d0f',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
    color: '#e0e0e0',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    padding: '12px 16px',
    background: '#13131a',
    borderBottom: '1px solid #2a2a35',
    flexShrink: 0,
  },
  adContainer: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '16px',
    background: '#0d0d0f',
    minHeight: 0,
  },
  footer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    background: '#13131a',
    borderTop: '1px solid #2a2a35',
    flexShrink: 0,
  },
  timerBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  timerRing: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  continueBtn: {
    padding: '12px 32px',
    background: '#9b6dff',
    color: 'white',
    border: 'none',
    borderRadius: 8,
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    transition: 'background 0.15s',
  },
  doneBox: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    gap: 8,
  },
}
