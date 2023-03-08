import { Box, Flex, Image, Text } from "@chakra-ui/react";

export function TravelTypes () {

    return (
        <Flex
            px={["50px","140px"]}
            py={["36px", "80px"]}
            justifyContent={["center", "space-between"]}
            flexWrap={["wrap", "wrap", "nowrap"]}
            gap="4"
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
        <Flex direction={["row", "column"]} gap={["2", "6"]} alignItems="center" >
            <Image src={image} alt="" w="85px" display={["none", "block"]}/>
            <Box w="8px" h="8px" borderRadius="50%" backgroundColor={"yellow.500"} display={["block", "none"]} />
            <Text fontWeight="600" >{text}</Text>
        </Flex>
    )
}