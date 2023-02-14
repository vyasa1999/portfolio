import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import Title from '@/components/index/Title'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Ash Vyas</title>
        <meta name="description" content="Ash Vyas' Portfolio and Resume" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Title/>
        <div style={{height: '100vh'}}></div>
      </main>
    </>
  )
}
