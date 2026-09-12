import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { PrimeReactProvider } from '@primereact/core'
import {
  createChartInstanceFromCatalog,
  DASHBOARD_LAYOUT_STORAGE_KEY,
  getFakeDashboardChartCatalog,
  kitPrimeReactConfig,
  saveDashboardLayout,
  Toaster,
} from '@jarvis/core'
import App from './App.jsx'
import './index.css'

function seedDashboardLayout() {
  if (localStorage.getItem(DASHBOARD_LAYOUT_STORAGE_KEY)) return

  const catalog = getFakeDashboardChartCatalog()
  const revenue = createChartInstanceFromCatalog(catalog[0], { x: 0, y: 0 }, [])
  const orders = createChartInstanceFromCatalog(catalog[1], { x: 4, y: 0 }, [revenue])

  saveDashboardLayout({ version: 2, charts: [revenue, orders] })
}

seedDashboardLayout()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <PrimeReactProvider {...kitPrimeReactConfig}>
        <App />
        <Toaster />
      </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>,
)
