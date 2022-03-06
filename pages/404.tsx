import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const NotFound: NextPage = () => {
  return (
    <div>
      Something has gone wrong
Were sorry, and we are working our best to fix this. In the meantime, have you tried the following?

Refreshing this page.
Clearing your browser cache.
If that doesnt help, please let us know on our Help Center!

Support information

    </div>
  )
}

export default NotFound;
