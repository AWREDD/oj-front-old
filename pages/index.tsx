
import Head from 'next/head'

import Header from '@/components/Header'
import ProblemList from '@/components/ProblemList'
import FilterBar from '@/components/FilterBar'
import NewProblem from '@/components/NewProblem'


export default function Home() {
  
  return (
    <>
      
      <Head>
        <Header></Header>
      </Head>
      
      <FilterBar></FilterBar>
      <ProblemList></ProblemList>
      <NewProblem></NewProblem>
    </>
  )
}
