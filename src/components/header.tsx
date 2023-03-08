import { Flex, Image, Link } from "@chakra-ui/react";
import { ChevronLeftIcon } from "@chakra-ui/icons";

interface HeaderProps {
    isHome?: boolean
}

export function Header ({isHome = true}: HeaderProps) {

    return (
        <Flex 
            justifyContent="center"
            alignItems="center"
            position="relative"
            w="full"
            h={["50px", "100px"]}
        >
            { !isHome && (
                <Link href="/" position="absolute" left={["4", "140px"]}>
                    <ChevronLeftIcon w={["4", "8"]} h={["4", "8"]} />
                </Link>
            )}
            <Image
                src="/logo.svg"
                alt="Worldtrip logo"
                w={["80px", "180px"]}
            />
        </Flex>
    )
}