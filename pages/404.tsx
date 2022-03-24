import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const NotFound: NextPage = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center ">

      <h1 className="text-4xl font-bold">404</h1>
      <h2 className="text-2xl">Something has gone wrong</h2>
      <p>
        We&apos;re sorry
      </p>
We&apos;re sorry, and we are working our best to fix this. In the meantime, have you tried the following?

Refreshing this page.
Clearing your browser cache.
If that doesnt help, please let us know on our Help Center!

Support information

    </div>
  )
}

export default NotFound;
