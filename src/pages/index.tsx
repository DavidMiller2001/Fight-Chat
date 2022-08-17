import type { NextPage } from 'next'
import { signIn, signOut } from 'next-auth/react'
import Head from 'next/head'
import { trpc } from '../utils/trpc'
import { useSession } from 'next-auth/react'

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === 'unauthenticated') {
    return (
      <>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    )
  }

  return (
    <>
      <h1>You are Signed In</h1>
      <button onClick={() => signOut()}>Sign Out</button>
    </>
  )
}

export default Home
