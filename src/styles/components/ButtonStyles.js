import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
    variants: {
        primary: {
            bg: 'red',
            color: 'white',
               borderRadius: '50px',
            _hover: {
                boxShadow: 'md',
            }
        },
    },
});