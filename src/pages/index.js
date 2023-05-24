import Add from '@/components/Add'
import AddButton from '@/components/AddButton'
import Featured from '@/components/Featured'
import PizzaList from '@/components/PizzaList'
import axios from 'axios'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'

export default function Home({pizzaList, admin}) {  
  const [close, setClose] = useState(true)

  return (
    <div>
      <Head>
        <title>Pizza Restaurant in Mumbai</title>
        <meta name="description" content="Best pizza shop in town" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Featured />
      {admin && <AddButton setClose={setClose} />}
      <PizzaList pizzaList={pizzaList} />
      {!close && <Add setClose={setClose} />}
    </div>
  )
}

export const getServerSideProps = async(ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false

    if(myCookie.token === process.env.TOKEN){
      admin = true
    }

  const response = await axios.get("https://mern-food-ordering.vercel.app/api/products")
    return {
      props: {
        pizzaList: response.data,
        admin
      }
    }
}