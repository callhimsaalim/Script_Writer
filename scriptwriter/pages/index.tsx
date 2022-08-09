import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../Components/Footer'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-gradient-to-b from-gray-900/10 to-[#757574]">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Footer></Footer>  
    </div>
  )
}

export default Home
