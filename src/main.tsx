import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { I18nProvider } from './i18n/context.tsx'
import { DesignProvider } from './design/context.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <DesignProvider>
      <I18nProvider>
        <App />
      </I18nProvider>
    </DesignProvider>
  </StrictMode>,
)
