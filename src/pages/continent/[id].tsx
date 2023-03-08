/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { Flex, Heading, Text } from "@chakra-ui/react";
import { Banner } from "../../components/banner-continent";
import { CardCity } from "../../components/card-city-continent";
import { CityDetail } from "../../components/city-detail";
import { Header } from "../../components/header";
import { Loading } from "../../components/loading";

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

const Continent: NextPage<ContinentProps> = () => {

    const [ continent, setContinent ] = useState<Continent | null>(null);
    const [ cities, setCities ] = useState<Cities[]>([]);

    const router = useRouter();
    const { id } = router.query;

    const getContinentInfo = async (id: string) => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/continents/${id}`);
        
        const continent = await data.json();

        return continent;
    }

    const getHundredMoreCities = async () => {
        const data = await fetch(`${process.env.NEXT_PUBLIC_BACK_END_URL}/cities?continentId=${continent?.id}`);

        const cities = await data.json();

        return cities;
    }

    useEffect(() => {
        if (!id) return;

        getContinentInfo(id as string)
        .then(continent => setContinent(continent))
    
    }, [id])

    useEffect(() => {
        getHundredMoreCities()
        .then(cities => setCities(cities))

    }, [continent])

    return (
        <>
            <Header isHome={false} />
            { continent ?
                <>
                    <Banner
                        image={continent.image}
                        name={continent.name}
                    />
                    <Flex
                        direction={["column", "row"]}
                        justifyContent="space-between"
                        py={["4", "80px"]}
                        px={["4", "140px"]}
                        gap="4"
                    >
                        <Text w={["auto", "600px"]} fontSize={["14px", "24px"]}>
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
                    <Heading fontSize={["24px"]} fontWeight={["500"]} py={["4", "40px"]} px={["4", "140px"]}>Cidades +100</Heading>
                    <Flex
                        direction={["column", "row"]}
                        gap={["20px", "45px"]}
                        px={["0", "140px"]}
                        pb="8"
                        w={["full"]}
                        alignItems={["center", "start"]}
                    >
                        {cities.map(city => (
                            <CardCity 
                                key={city.id}
                                {...city}
                            />
                        ))}
                    </Flex> 
                </> : 
                <Loading />
            }
        </>
    )
}

export default Continent;