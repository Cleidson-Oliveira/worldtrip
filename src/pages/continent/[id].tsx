import { Flex, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { Banner } from "../../components/banner-continent";
import { CityDetail } from "../../components/city-detail";
import { Header } from "../../components/header";

interface Continent {
    id: number,
    name: string,
    image: string,
    description: string,
    countriesAmount: number,
    languages: number,
    oneHundredMoreCities: number
}

interface ContinentProps {
    continent: Continent
}
const Continent: NextPage<ContinentProps> = ({ continent }) => {

    return (
        <>
            <Header />
            <Banner
                image={continent.image}
                name={continent.name}
            />
            <Flex
                justifyContent="space-between"
                py="80px"
                px="140px"
            >
                <Text w="600px" fontSize="24px">
                    {continent.description}
                </Text>
                <Flex gap="42px">
                    <CityDetail
                        title="países"
                        value={continent.countriesAmount}
                    />
                    <CityDetail 
                        title="línguas" 
                        value={continent.languages} 
                    />
                    <CityDetail 
                        title="cidades +100" 
                        value={continent.oneHundredMoreCities} 
                    />
                </Flex>
            </Flex>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
  
    return ({
        paths: [
            {
                "params": {
                    "id": "1",
                },
            }
        ],
        fallback: "blocking"
    })
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { id } = params!;
    
    const data = await fetch(`${process.env.BACK_END_URL}/continents/${id}`);
    const continent = await data.json();

    return ({
        props: {
          continent
        },
        revalidate: 60 * 60 * 24 // 24 hrs
    })
}

export default Continent;