import React, {useState, useEffect} from 'react'
import Head from 'next/head'


const Home = ({articles}) => {
  
  const [list, setList] = useState()

  useEffect(() => {
    ;(async () => {
      const res = await fetch('/api/articles')
      const data = await res.json()
      setList(data)
    })()
  }, [])

  return (
    <main>
      <Head>
        <title>Homepage</title>
      </Head>
      <h1>Welcome</h1>
      <ul>
        {(list || []).map((entry) => {
          return (
            <li key={entry.slug}>
              {entry.title}
            </li>
          )
        })}
      </ul>
    </main>
  )
}


export default Home
