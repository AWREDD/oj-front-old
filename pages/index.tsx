
import Head from 'next/head'

import Header from '@/components/Header'
import ProblemList from '@/components/ProblemList'
import FilterBar from '@/components/FilterBar'


export default function Home() {
  
  return (
    <>
      
      <Head>
        <Header></Header>
      </Head>
      
      <FilterBar></FilterBar>
      <ProblemList></ProblemList>
    </>
  )
}
