import { Text } from "@chakra-ui/react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Banner } from "../components/banner-home";
import { ContinentsSlider } from "../components/continents-slider-home";
import { Header } from "../components/header";
import { TravelTypes } from "../components/travel-types-home";

interface Continent {
  id: number,
  name: string,
  image: string,
  shortDescription: string,
}

interface ContinentProps {
  continents: Continent[]
}

const Home: NextPage<ContinentProps> = ({continents}) => {

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
      <ContinentsSlider continents={continents}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/continents/`);
  const continents = await data.json();

  return ({
      props: {
        continents
      },
      revalidate: 60 * 60 * 24 // 24 hrs
  })
}

export default Home;
