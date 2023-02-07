import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'

export default function Home({pizzaList}) {  
  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Mumbai</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      <PizzaList pizzaList={pizzaList} />
    </div>
  )
}

export const getServerSideProps = async() => {
    const response = await axios.get("http://localhost:3000/api/products")
    return {
      props: {
        pizzaList: response.data,
      }
    }
}