import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CardCityProps {
    id?: number,
    name: string,
    country: string,
    continentId?: number,
    image: string,
    countryFlag: string,
}

export function CardCity (props: CardCityProps) {

    return (
        <Flex w="256px" direction="column" borderRadius="4px" border="1px solid #ffba0880" overflow="hidden">
            <Image src={props.image} alt="" h="170px" />
            <Flex p="24px" alignItems="center" justifyContent="space-between">
                <Box>
                    <Text fontSize="20px" fontWeight="600">{props.name}</Text>
                    <Text fontSize="16px" fontWeight="500">{props.country}</Text>
                </Box>
                <Image 
                    src={props.countryFlag} 
                    alt=""
                    w="30px"
                    h="30px"
                    borderRadius="50%"
                />
            </Flex>
        </Flex>
    )
}