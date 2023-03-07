import { Flex, Image } from "@chakra-ui/react";

export function Header () {

    return (
        <Flex 
            w="full"
            h="100px"
            bg="#ffffff"
            justifyContent="center"
            alignItems="center"
        >
            <Image
                src="/logo.svg"
                alt="Worldtrip logo"
                w="180px"
            />
        </Flex>
    )
}