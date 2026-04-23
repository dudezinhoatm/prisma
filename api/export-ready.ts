// Vercel Serverless Function
// Guarda tokens de export em memória (funciona para baixo volume)
// Para produção com muitos usuários, use Vercel KV (Redis)

import type { VercelRequest, VercelResponse } from '@vercel/node'

// Store em memória — persiste enquanto a função estiver quente
// Tokens expiram em 10 minutos
const tokens = new Map<string, { ready: boolean; createdAt: number }>()

const TTL = 10 * 60 * 1000 // 10 minutos

function cleanup() {
  const now = Date.now()
  for (const [key, val] of tokens.entries()) {
    if (now - val.createdAt > TTL) tokens.delete(key)
  }
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  cleanup()

  // CORS para o app Electron
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  const token = (req.query.token as string) || (req.body?.token as string)

  if (!token) {
    return res.status(400).json({ error: 'token required' })
  }

  if (req.method === 'POST') {
    // Marca token como pronto (usuário assistiu o anúncio)
    tokens.set(token, { ready: true, createdAt: Date.now() })
    return res.status(200).json({ ok: true })
  }

  if (req.method === 'GET') {
    // App desktop verifica se pode exportar
    const entry = tokens.get(token)
    if (entry?.ready) {
      tokens.delete(token) // usa uma vez só
      return res.status(200).json({ ready: true })
    }
    return res.status(200).json({ ready: false })
  }

  return res.status(405).json({ error: 'method not allowed' })
}
