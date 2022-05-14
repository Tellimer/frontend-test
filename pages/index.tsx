import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'

const Home = () => {

  const [latest, setLatest] = useState()

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setLatest(data)
    })()
  }, [])

  return (
    <section>
      <Head>
        <title>Latest news</title>
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">
        Latest news
      </h1>
      <ul className="flex flex-col">
        {(latest || []).map((entry) => {
          return (
            <li className="mb-4 w-full flex" key={entry.slug}>
              <img className="contain mr-4" src={entry.image} width="48" alt=""/>
              <Link href={`/article/${entry.slug}`}>
                <a className="hover:underline">
                  {entry.title}
                </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}


export default Home
