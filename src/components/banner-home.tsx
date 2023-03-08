import { Flex, Heading, Image, Text } from "@chakra-ui/react";

export function Banner () {

    return (
        <Flex
            gap="16"
            backgroundImage={"/background.png"}
            bgRepeat="no-repeat"
            pt={["28px", "80px"]}
            pb={["28px", "0"]}
            px={["4", "140px"]}
        >
            <Flex direction="column" gap="5">
                <Heading
                    fontWeight="500"
                    fontSize={["20px"]}
                    lineHeight={["30px", "54px"]}
                    color="#ffffff"
                >
                    5 Continentes,<br />
                    infinitas possibilidades.
                </Heading>
                <Text
                    fontWeight="300"
                    lineHeight={["20px", "30px"]}
                    fontSize={["14px", "20px"]}
                    color="#ffffff"
                >
                    Chegou a hora de tirar do papel a viagem que você sempre sonhou. 
                </Text>
            </Flex>
            <Image src="/airplane.svg" alt="airplane illustration" display={["none", "none", "block"]}/>
        </Flex>
    )
}