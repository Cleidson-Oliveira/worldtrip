import type { NextPage } from "next";
import Head from "next/head";
import { Header } from "../components/header";

const Home: NextPage = () => {
  return (
    <div >
      <Head>
        <title>Home</title>
      </Head>
      <Header />
      Hello World
    </div>
  )
}

export default Home
