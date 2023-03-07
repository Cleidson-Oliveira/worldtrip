import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    styles: {
        global: {
            body: {
                bg: "#ffffff",
                color: "#47585B"
            },
        },
    },
    fonts: {
        body: "Poppins",
        heading: "Poppins"
    }
})