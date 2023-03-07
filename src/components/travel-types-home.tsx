import { Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes () {

    return (
        <Flex
            px="140px"
            py="80px"
            justifyContent="space-between"
        >
            <Card image="/cocktail.svg" text="vida noturna"/>
            <Card image="/surf.svg" text="praia"/>
            <Card image="/building.svg" text="moderno" />
            <Card image="/museum.svg" text="clássico"/>
            <Card image="/earth.svg" text="e mais..."/>
        </Flex>
    )
}

interface CardProps {
    image: string,
    text: string
}

function Card ({image, text}: CardProps) {
    return (
        <Flex direction="column" gap="6" alignItems="center" >
            <Image src={image} alt="" w="85px" />
            <Text fontWeight="600" >{text}</Text>
        </Flex>
    )
}