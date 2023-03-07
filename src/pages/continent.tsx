import { Box, Flex, Text } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Banner } from "../components/banner-continent";
import { CityDetail } from "../components/city-detail";
import { Header } from "../components/header";

const continents = [
    {
        name: "Africa",
        image: "/africa.jpg",
        description: "A África é o terceiro continente mais extenso e o segundo continente mais populoso da Terra, apresentando grande diversidade étnica, cultural, social e política.",
        countriesAmount: 15,
        languages: 15,
        oneHundredMoreCities: 4
    },
    {
        name: "América do Norte",
        image: "/americaN.jpg",
        description: "A América do Norte é um subcontinente que compreende a porção setentrional do continente americano.",
        countriesAmount: 3,
        languages: 6,
        oneHundredMoreCities: 10
    },
    {
        name: "América do Sul",
        image: "/americaS.jpg",
        description: "A América do Sul é um continente que compreende a porção meridional da América. Também é considerada um subcontinente do continente americano.",
        countriesAmount: 13,
        languages: 9,
        oneHundredMoreCities: 3
    },
    {
        name: "Ásia",
        image: "/asia.jpg",
        description: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
        countriesAmount: 49,
        languages: 50,
        oneHundredMoreCities: 52
    },
    {
        name: "Europa",
        image: "/europe.jpg",
        description: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
        countriesAmount: 50,
        languages: 287,
        oneHundredMoreCities: 28
    },
    {
        name: "Oceania",
        image: "/oceania.jpg",
        description: "Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico em conjunto com o contimente da Austrália.",
        countriesAmount: 24,
        languages: 3,
        oneHundredMoreCities: 3
    },
]

const Continent: NextPage = () => {
    
    const continent = 3;

    return (
        <>
            <Header />
            <Banner
                image={continents[continent].image}
                name={continents[continent].name}
            />
            <Flex
                justifyContent="space-between"
                py="80px"
                px="140px"
            >
                <Text w="600px" fontSize="24px">
                    {continents[continent]. description}
                </Text>
                <Flex gap="42px">
                    <CityDetail
                        title="países"
                        value={continents[continent].countriesAmount.toString()}
                    />
                    <CityDetail 
                        title="línguas" 
                        value={continents[continent].languages.toString()} 
                    />
                    <CityDetail 
                        title="cidades +100" 
                        value={continents[continent].oneHundredMoreCities.toString()} 
                    />
                </Flex>
            </Flex>
        </>
    )
}

export default Continent;