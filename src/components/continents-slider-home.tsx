import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const continents = [
    {
        name: "Africa",
        description: "O berço da raça humana.",
        image: "/africa.jpg"
    },
    {
        name: "América do norte",
        description: "o continente mais antigo",
        image: "/americaN.jpg"
    },
    {
        name: "América do sul",
        description: "o continente mais antigo",
        image: "/americaS.jpg"
    },
    {
        name: "Ásia",
        description: "O maior dos continentes.",
        image: "/asia.jpg"
    },
    {
        name: "Europa",
        description: "O continente mais antigo.",
        image: "/europe.jpg"
    },
    {
        name: "Oceania",
        description: "o continente mais antigo",
        image: "/oceania.jpg"
    },
]

export function ContinentsSlider () {
  return (
    <Box
        width="85%"
        m="auto"
        py="40px"
    >
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
        >
            {continents.map((continent) => (
                <SwiperSlide key={continent.name}>
                    <CardSlide {...continent}/>
                </SwiperSlide>
            ))}
        </Swiper>
    </Box>
  );
};

interface CardSlideProps {
    name: string
    description: string
    image: string
}

const CardSlide = ({name, image, description}: CardSlideProps) => {
    return (
        <Box
            bgImage={image}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w="full"
            h="450px"
        >
            <Link href="/continent" _hover={{textDecoration: "none"}}>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    gap="4"
                    w="full"
                    h="full"
                    backgroundColor="#00000080"
                >
                    <Heading color="#fff">{name}</Heading>
                    <Text color="#fff">{description}</Text>
                </Flex>
            </Link>
        </Box>
    )
}