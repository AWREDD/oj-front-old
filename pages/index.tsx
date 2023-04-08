import Head from 'next/head'
import { Inter } from 'next/font/google'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <Header></Header>
      </Head>
      <h1>Hello world!</h1>
    </>
  )
}
