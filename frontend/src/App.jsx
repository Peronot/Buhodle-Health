import { useEffect, useState } from 'react'
import Home from './pages/Home.jsx'
import ContentPage from './pages/ContentPage.jsx'
import { findPageBySlug } from './data/navigation.js'
import { getPageContent } from './data/pageContent.js'

function getCurrentPage() {
  if (!window.location.hash.startsWith('#/')) {
    return null
  }

  const slug = window.location.hash.replace(/^#\//, '')

  if (!slug) {
    return null
  }

  return findPageBySlug(slug)
}

function App() {
  const [page, setPage] = useState(getCurrentPage)

  useEffect(() => {
    const baseTitle = 'Buhodle Health Professional Institute'
    const title = page ? `${page.title} | ${baseTitle}` : baseTitle
    const description = page
      ? getPageContent(page.title).summary
      : 'Buhodle Health Professional Institute provides practical healthcare diploma programs in laboratory, midwifery, nursing, pharmacology, and nutrition.'

    document.title = title

    const descriptionTag = document.querySelector('meta[name="description"]')
    if (descriptionTag) {
      descriptionTag.setAttribute('content', description)
    }
  }, [page])

  useEffect(() => {
    function handleHashChange() {
      setPage(getCurrentPage())

      if (window.location.hash.startsWith('#/')) {
        window.scrollTo({ top: 0 })
        return
      }

      const id = window.location.hash.replace('#', '')
      window.setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' })
      }, 0)
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
