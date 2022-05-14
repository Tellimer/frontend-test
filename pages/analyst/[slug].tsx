import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Article = () => {

  return (
    <section>
      <Head>
        <title>Analyst page</title>
      </Head>
      <h1 className="text-3xl font-bold underline mb-4">
        Analyst page
      </h1>
    </section>
  )
}


export default Article
