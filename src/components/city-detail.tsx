import { Flex, Text } from "@chakra-ui/react";

interface CityDetailProps {
    value: string,
    title: string
}

export function CityDetail ({title, value}: CityDetailProps) {

    return (
        <Flex direction="column" alignItems="center">
            <Text color="#FFBA08" fontSize="48px" fontWeight="500">
                {value}
            </Text>
            <Text fontSize="24px" fontWeight="600" >{title}</Text>
        </Flex>
    )
}