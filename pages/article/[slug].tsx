import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Article = () => {
  const router = useRouter()
  const [article, setArticle] = useState<Record<string, any>>()

  useEffect(() => {
    ;(async () => {
      if (!router.isReady) return
      const {slug} = router.query

      const res = await fetch('/api/article/' + slug)
      const data = await res.json()

      setArticle(data)
    })()
  }, [router])

  if (!article) return null

  return (
    <section>
      <Head>
        <title>{article.title}</title>
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">
        {article.title}
      </h1>
      <p>
        Author: {article.leadAnalyst?.firstName} {article.leadAnalyst?.lastName}
      </p>
      <div className="mt-4" dangerouslySetInnerHTML={{__html: article.content}} />
    </section>
  )
}


export default Article
