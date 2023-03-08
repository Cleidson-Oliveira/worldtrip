import { Flex, Spinner, Text } from '@chakra-ui/react'

export function Loading () {

    return (
        <Flex w="full" h="80vh" direction="column" justifyContent="center" alignItems="center" gap="2rem">
            <Spinner emptyColor='gray.200'/>
            <Text>Loading...</Text>
        </Flex>
    )
}