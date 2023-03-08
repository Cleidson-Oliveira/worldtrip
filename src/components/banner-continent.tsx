import { Flex, Heading } from "@chakra-ui/react";

interface BannerProps {
    name: string,
    image: string,
}

export function Banner ({ image, name }: BannerProps) {

    return (
        <Flex
            gap="16"
            backgroundImage={image}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            py={["4", "60px"]}
            px={["4", "140px"]}
            h={["150px", "500px"]}
            justifyContent={["center", "start"]}
            alignItems={["center", "end"]}
        >
            <Heading
                fontWeight="500"
                lineHeight="54px"
                color="#ffffff"
                fontSize={["28px", "48px"]}
            >
                {name}
            </Heading>
        </Flex>
    )
}