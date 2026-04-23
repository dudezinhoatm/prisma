// Vercel Serverless Function
// Guarda tokens de export em memória

const tokens = new Map<string, { ready: boolean; createdAt: number }>()
const TTL = 10 * 60 * 1000

function cleanup() {
  const now = Date.now()
  for (const [key, val] of tokens.entries()) {
    if (now - val.createdAt > TTL) tokens.delete(key)
  }
}

export default function handler(req: { method: string; query: Record<string, string>; body: Record<string, string> }, res: { status: (n: number) => { json: (d: unknown) => void; end: () => void } }) {
  cleanup()

  res.status(200) // CORS headers set via vercel.json

  const token = req.query?.token || req.body?.token

  if (!token) return res.status(400).json({ error: 'token required' })

  if (req.method === 'POST') {
    tokens.set(token, { ready: true, createdAt: Date.now() })
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'GET') {
    const entry = tokens.get(token)
    if (entry?.ready) {
      tokens.delete(token)
      return res.status(200).json({ ready: true })
    }
    return res.status(200).json({ ready: false })
  }

  return res.status(405).json({ error: 'method not allowed' })
}
