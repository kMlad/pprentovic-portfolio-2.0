import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" text-white">
        <div className='h-20 w-20 bg-blue-400 flex justify-center items-center'>

        <p className='font-bold'>Poppins</p>
        </div>
      </main>

      <footer className="">
       
      </footer>
    </>
  )
}