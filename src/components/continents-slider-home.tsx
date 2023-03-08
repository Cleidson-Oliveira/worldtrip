import { Box, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

interface Continent {
    id: number,
    name: string,
    image: string,
    shortDescription: string,
}

interface ContinentsSliderProps {
    continents: Continent[]
}

interface CardSlideProps extends Continent {}

export function ContinentsSlider ({continents}: ContinentsSliderProps) {
  return (
    <Box
        width={["full", "85%"]}
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

const CardSlide = ({name, image, shortDescription, id}: CardSlideProps) => {
    return (
        <Box
            bgImage={image}
            bgSize="cover"
            bgPosition="center"
            bgRepeat="no-repeat"
            w="full"
            h={["250px", "450px"]}
        >
            <Link href={`/continent/${id}`} _hover={{textDecoration: "none"}}>
                <Flex
                    justifyContent="center"
                    alignItems="center"
                    direction="column"
                    gap="4"
                    w="full"
                    h="full"
                    backgroundColor="#00000080"
                >
                    <Heading color="#fff" fontSize={["24px", "48px"]}>{name}</Heading>
                    <Text color="#fff" fontSize={["14px", "24px"]} >{shortDescription}</Text>
                </Flex>
            </Link>
        </Box>
    )
}