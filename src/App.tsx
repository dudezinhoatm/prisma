import { useEffect } from 'react'
import ExportPage from './pages/ExportPage'
import EditorPage from './pages/EditorPage'
import PrivacyPage from './pages/PrivacyPage'

export default function App() {
  const path = window.location.pathname
  const isExportPage = path === '/export'
  const isPrivacyPage = path === '/privacy'

  useEffect(() => {
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.background = '#0d0d0f'
    document.body.style.overflow = isExportPage ? 'hidden' : 'auto'
  }, [isExportPage])

  if (isExportPage) return <ExportPage />
  if (isPrivacyPage) return <PrivacyPage />
  return <EditorPage />
}
