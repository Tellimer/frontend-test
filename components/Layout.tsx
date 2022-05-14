import Link from 'next/link'
import React from 'react'

const Layout = ({children}) => {

  return (
    <>
      <nav className="w-full h-12 border-b fixed flex top-0 left-0 bg-white shadow-md">
          <Link href="/">
            <a>
              <img src="/logo.jpeg" alt="" height="48" width="48"/>
            </a>
          </Link>
      </nav>
      <main className="p-4 max-w-xl mx-auto mt-14">
        {children}
      </main>
      <footer  className="mt-14 bg-slate-800 text-white">
        <ul className="p-4 max-w-xl mx-auto">
          <li>
            <Link href="/about">
              <a>About us</a>
            </Link>
          </li>
        </ul>
      </footer>
    </>
  )
}


export default Layout
