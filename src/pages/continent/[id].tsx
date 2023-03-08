import { Flex, Text } from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Banner } from "../../components/banner-continent";
import { CardCity } from "../../components/card-city-continent";
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

interface Cities {
    id: number,
    name: string,
    country: string,
    continentId: number,
    image: string,
    countryFlag: string,
}

const Continent: NextPage<ContinentProps> = ({ continent }) => {

    const [ cities, setCities ] = useState<Cities[]>([]);

    const getHundredMoreCities = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/cities?continentId=${continent.id}`);

        const cities = await data.json();

        return cities;
    }

    useEffect(() => {
        getHundredMoreCities()
        .then(cities => setCities(cities))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
            <Flex gap="45px" px="140px" pb="8">
                {cities.map(city => (
                    <CardCity 
                        key={city.id}
                        {...city}
                    />
                ))}
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
    
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/continents/${id}`);
    const continent = await data.json();

    return ({
        props: {
          continent
        },
        revalidate: 60 * 60 * 24 // 24 hrs
    })
}

export default Continent;