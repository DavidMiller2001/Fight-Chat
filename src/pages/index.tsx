import type { NextPage } from 'next'
import { signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
    return (
      <div className='bg-slate-800 h-screen text-white flex justify-center items-center'>
        <button
          className='bg-purple-300 rounded-lg px-4 py-2'
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </div>
    )
  }

  return (
    <>
      <div className='bg-slate-800 w-screen h-screen text-white p-4 flex flex-col justify-center items-center relative'>
        <button
          className='bg-purple-300 px-4 py-2 text-xl rounded-lg absolute bottom-12'
          onClick={() => signOut()}
        >
          Sign Out
        </button>
        <div className='bg-gray-500 h-screen w-screen text-container'></div>
      </div>
    </>
  )
}

export default Home
