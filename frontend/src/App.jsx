import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import ContentPage from './pages/ContentPage.jsx'
import { findPageBySlug } from './data/navigation.js'

function getCurrentPage() {
  const slug = window.location.hash.replace(/^#\/?/, '')

  if (!slug) {
    return null
  }

  return findPageBySlug(slug)
}

function App() {
  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    function handleHashChange() {
      setPage(getCurrentPage())
      window.scrollTo({ top: 0 })
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  if (page) {
    return <ContentPage page={page} />
  }

  return <Home />
}

export default App
