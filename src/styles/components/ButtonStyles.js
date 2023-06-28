import { defineStyleConfig } from "@chakra-ui/react";

export const ButtonStyles = defineStyleConfig({
    variants: {
        primary: {
            bg: 'red',
            color: 'white',
            transition: 'all 200ms ease',
            _hover: {
                boxShadow: 'md',
                transform: 'scale(1.02)',
            }
        },
    },
});