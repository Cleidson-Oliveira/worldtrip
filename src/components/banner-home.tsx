import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner () {

    return (
        <Flex
            gap="16"
            backgroundImage={"/background.png"}
            bgRepeat="no-repeat"
            pt="80px"
            px="140px"
        >
            <Flex direction="column" gap="5">
                <Heading
                    fontWeight="500"
                    lineHeight="54px"
                    color="#ffffff"
                >
                    5 Continentes,<br />
                    infinitas possibilidades.
                </Heading>
                <Text
                    fontWeight="300"
                    lineHeight="30px"
                    fontSize="20px"
                    color="#ffffff"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
            </Flex>
            <Image src="/airplane.svg" alt="airplane illustration" />
        </Flex>
    )
}