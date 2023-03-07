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
            py="60px"
            px="140px"
            h="500px"
            alignItems="end"
        >
            <Heading
                fontWeight="500"
                lineHeight="54px"
                color="#ffffff"
            >
                {name}
            </Heading>
        </Flex>
    )
}