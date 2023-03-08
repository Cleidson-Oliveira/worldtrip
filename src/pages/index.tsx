import { useEffect, useState } from "react";
import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Text } from "@chakra-ui/react";
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

const Home: NextPage = () => {

  const [ continents, setContinents ] = useState<Continent[]>([] as Continent[]);

  const getContinentsData = async (): Promise<Continent[]> => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/continents/`);
    const continents = await data.json() as Continent[];
    return continents;
  }

  useEffect(() => {
    getContinentsData()
    .then((continents) => setContinents(continents))
  }, [])

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>

      <Header />
      <Banner />
      <TravelTypes />
      <Text align="center" fontWeight="500" fontSize={["20px", "36px"]}>
        Vamos nessa?<br />
        Então escolha seu continente
      </Text>
      <ContinentsSlider continents={continents}/>
    </>
  )
}

export default Home;
