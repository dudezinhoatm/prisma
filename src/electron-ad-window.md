# Como integrar no Electron (main.ts)

Adicione esta função no `motion-studio/electron/main.ts`:

```typescript
import { BrowserWindow, ipcMain } from 'electron'
import { randomUUID } from 'crypto'

// URL do seu site no Vercel
const WEB_URL = 'https://seu-site.vercel.app'

async function checkOnline(): Promise<boolean> {
  try {
    const res = await fetch(`${WEB_URL}/api/export-ready?token=ping`, { signal: AbortSignal.timeout(3000) })
    return res.ok
  } catch {
    return false
  }
}

export async function showAdBeforeExport(): Promise<boolean> {
  // Se offline, exporta direto
  const online = await checkOnline()
  if (!online) return true

  const token = randomUUID()
  
  return new Promise((resolve) => {
    const adWindow = new BrowserWindow({
      width: 520,
      height: 420,
      resizable: false,
      minimizable: false,
      maximizable: false,
      title: 'Prisma Visuals — Preparando Export',
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
      },
    })

    adWindow.loadURL(`${WEB_URL}/export?token=${token}`)
    adWindow.setMenuBarVisibility(false)

    // Polling: verifica a cada 1s se o usuário assistiu
    const poll = setInterval(async () => {
      try {
        const res = await fetch(`${WEB_URL}/api/export-ready?token=${token}`)
        const data = await res.json()
        if (data.ready) {
          clearInterval(poll)
          adWindow.close()
          resolve(true)
        }
      } catch { /* continua tentando */ }
    }, 1000)

    // Se fechar a janela sem assistir, cancela o export
    adWindow.on('closed', () => {
      clearInterval(poll)
      resolve(false)
    })

    // Timeout de segurança: 3 minutos
    setTimeout(() => {
      clearInterval(poll)
      if (!adWindow.isDestroyed()) adWindow.close()
      resolve(true) // libera mesmo assim
    }, 3 * 60 * 1000)
  })
}
```

## Como usar no handler de export:

```typescript
ipcMain.handle('start-export', async (event, exportOptions) => {
  const canExport = await showAdBeforeExport()
  if (!canExport) return { cancelled: true }
  
  // ... lógica de export normal
})
```
