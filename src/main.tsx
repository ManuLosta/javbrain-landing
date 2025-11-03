import { StrictMode, useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from '@/pages/index'
import { initMetaPixel } from '@/lib/pixel'

function Root() {
  useEffect(() => {
    const pixelId = import.meta.env.VITE_FB_PIXEL_ID as string | undefined
    initMetaPixel(pixelId)
    // PageView is automatically sent by Meta after init; no manual call needed here
  }, [])
  return <Index />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
