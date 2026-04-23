export default function PrivacyPage() {
  const updated = 'April 23, 2026'

  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif', background: '#0d0d0f', color: '#e0e0e0', minHeight: '100vh' }}>

      {/* NAV */}
      <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: 'rgba(13,13,15,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #2a2a35', padding: '0 32px', height: 60, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <svg width="24" height="24" viewBox="0 0 18 18" fill="none">
            <polygon points="9,2 16,14 2,14" fill="none" stroke="#9b6dff" strokeWidth="1.5" strokeLinejoin="round"/>
            <polygon points="9,5 13.5,13 4.5,13" fill="rgba(124,92,191,0.3)" stroke="#7c5cbf" strokeWidth="1" strokeLinejoin="round"/>
          </svg>
          <span style={{ fontWeight: 800, fontSize: 16, color: '#b08aff' }}>Prisma Visuals</span>
        </a>
        <a href="/" style={{ color: '#808080', textDecoration: 'none', fontSize: 13 }}
          onMouseEnter={e => (e.currentTarget.style.color = '#e0e0e0')}
          onMouseLeave={e => (e.currentTarget.style.color = '#808080')}
        >← Back to Home</a>
      </nav>

      {/* CONTENT */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '100px 32px 80px' }}>
        <h1 style={{ fontSize: 40, fontWeight: 800, margin: '0 0 8px', letterSpacing: '-0.5px' }}>Privacy Policy</h1>
        <p style={{ color: '#505060', fontSize: 13, margin: '0 0 48px' }}>Last updated: {updated}</p>

        <Section title="1. Introduction">
          Prisma Visuals ("we", "our", or "us") operates the website at prismavisuals.app and the Prisma Visuals desktop application. This Privacy Policy explains how we collect, use, and protect your information when you use our services.
          <br/><br/>
          By using our website or application, you agree to the collection and use of information in accordance with this policy.
        </Section>

        <Section title="2. Information We Collect">
          <strong style={{ color: '#e0e0e0' }}>Desktop Application:</strong>
          <br/>
          The Prisma Visuals desktop app runs entirely on your local machine. We do not collect, store, or transmit any project files, compositions, assets, or personal data from within the application. All your work stays on your device.
          <br/><br/>
          <strong style={{ color: '#e0e0e0' }}>Website:</strong>
          <br/>
          When you visit our website, we may collect standard web analytics data such as pages visited, time on site, browser type, and general geographic location (country/region level). This data is anonymous and used only to improve the website.
          <br/><br/>
          <strong style={{ color: '#e0e0e0' }}>Export Feature:</strong>
          <br/>
          When you use the export feature in the desktop app, a temporary anonymous token is generated and sent to our server to verify ad completion. This token contains no personal information and expires within 10 minutes.
        </Section>

        <Section title="3. Advertising (Google AdSense)">
          Our website uses Google AdSense to display advertisements. Google AdSense may use cookies and similar technologies to serve ads based on your prior visits to our website or other websites on the internet.
          <br/><br/>
          Google's use of advertising cookies enables it and its partners to serve ads based on your visit to our site and/or other sites on the Internet. You may opt out of personalized advertising by visiting{' '}
          <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>Google Ads Settings</a>.
          <br/><br/>
          For more information on how Google uses data, please visit:{' '}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>
            How Google uses data when you use our partners' sites or apps
          </a>.
        </Section>

        <Section title="4. Cookies">
          Our website may use cookies to enhance your browsing experience. Cookies are small files stored on your device. We use:
          <br/><br/>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li><strong style={{ color: '#e0e0e0' }}>Analytics cookies</strong> — to understand how visitors interact with our website (anonymous data only)</li>
            <li><strong style={{ color: '#e0e0e0' }}>Advertising cookies</strong> — set by Google AdSense to serve relevant advertisements</li>
          </ul>
          <br/>
          You can control cookies through your browser settings. Disabling cookies may affect some functionality of the website.
        </Section>

        <Section title="5. Third-Party Services">
          We may use the following third-party services:
          <br/><br/>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li><strong style={{ color: '#e0e0e0' }}>Google AdSense</strong> — advertising platform (<a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>Privacy Policy</a>)</li>
            <li><strong style={{ color: '#e0e0e0' }}>Vercel</strong> — website hosting (<a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>Privacy Policy</a>)</li>
            <li><strong style={{ color: '#e0e0e0' }}>Discord</strong> — community platform (<a href="https://discord.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>Privacy Policy</a>)</li>
          </ul>
        </Section>

        <Section title="6. Data Retention">
          We do not store any personal data on our servers. Anonymous export tokens are automatically deleted after 10 minutes. Website analytics data is retained for up to 26 months in aggregate, anonymous form.
        </Section>

        <Section title="7. Children's Privacy">
          Our services are not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us with personal information, please contact us and we will delete it immediately.
        </Section>

        <Section title="8. Your Rights">
          Depending on your location, you may have the following rights regarding your data:
          <br/><br/>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li>Right to access the personal data we hold about you</li>
            <li>Right to request deletion of your personal data</li>
            <li>Right to opt out of personalized advertising</li>
            <li>Right to lodge a complaint with a supervisory authority</li>
          </ul>
          <br/>
          Since we collect minimal data, most of these rights can be exercised by simply clearing your browser cookies.
        </Section>

        <Section title="9. Changes to This Policy">
          We may update this Privacy Policy from time to time. We will notify you of any changes by updating the "Last updated" date at the top of this page. We encourage you to review this policy periodically.
        </Section>

        <Section title="10. Contact Us">
          If you have any questions about this Privacy Policy, please contact us:
          <br/><br/>
          <ul style={{ paddingLeft: 20, lineHeight: 2 }}>
            <li>Email: <a href="mailto:mickaelff3@gmail.com" style={{ color: '#9b6dff' }}>mickaelff3@gmail.com</a></li>
            <li>Discord: <a href="https://discord.gg/gnswbmaQTH" target="_blank" rel="noopener noreferrer" style={{ color: '#9b6dff' }}>discord.gg/gnswbmaQTH</a></li>
          </ul>
        </Section>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid #2a2a35', padding: '24px 32px', textAlign: 'center' }}>
        <p style={{ color: '#505060', fontSize: 12, margin: 0 }}>
          © {new Date().getFullYear()} Prisma Visuals •{' '}
          <a href="/privacy" style={{ color: '#505060', textDecoration: 'none' }}>Privacy Policy</a>
          {' '}•{' '}
          <a href="mailto:mickaelff3@gmail.com" style={{ color: '#505060', textDecoration: 'none' }}>Contact</a>
        </p>
      </footer>
    </div>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 40 }}>
      <h2 style={{ fontSize: 20, fontWeight: 700, margin: '0 0 16px', color: '#e0e0e0' }}>{title}</h2>
      <div style={{ color: '#808080', fontSize: 15, lineHeight: 1.8 }}>{children}</div>
    </div>
  )
}
