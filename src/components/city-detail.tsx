import { Flex, Text } from "@chakra-ui/react";

interface CityDetailProps {
    value: string | number,
    title: string
}

export function CityDetail ({title, value}: CityDetailProps) {

    return (
        <Flex direction="column" alignItems="center">
            <Text color="#FFBA08" fontSize={["24px", "48px"]} fontWeight="500">
                {value}
            </Text>
            <Text fontSize={["18px", "24px"]} fontWeight={["400", "600"]} >{title}</Text>
        </Flex>
    )
}