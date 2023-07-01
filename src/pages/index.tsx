import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useGetMonstersQuery } from '@/gql'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const { loading, data, error } = useGetMonstersQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <p>{data?.monsters.length}</p>
      </main>
    </>
  )
}
