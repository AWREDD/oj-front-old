import Head from 'next/head'
import axios from 'axios'
import Header from '@/components/Header'
import ProblemList from '@/components/ProblemList'
import FilterBar from '@/components/FilterBar'
import NewProblem from '@/components/NewProblem'


export default function Home({data}) {
  console.log(data)
  return (
    <>
      
      <Head>
        <Header></Header>
      </Head>
      
      <FilterBar></FilterBar>
      <ProblemList data={data}></ProblemList>
      <NewProblem></NewProblem>
    </>
  )
}

export const getStaticProps = async () => {
  let result = await axios({
      method: 'get',
      url: 'http://127.0.0.1:5000/problem/',
      params: {page: 1, limit: 10}
  })
  let { data} = result.data
  return {
      props: {
          data
      }
  }
}
