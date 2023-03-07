import { Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/banner-home";
import { ContinentsSlider } from "../components/continents-slider-home";
import { Header } from "../components/header";
import { TravelTypes } from "../components/travel-types-home";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <Text align="center" fontWeight="500" fontSize="36px" >
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>
      <ContinentsSlider />
    </>
  )
}

export default Home
