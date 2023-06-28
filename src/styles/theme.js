import { extendTheme } from "@chakra-ui/react";
import { ButtonStyles as Button } from "./components/ButtonStyles";
import { NavLinkStyles as NavLink } from "./components/NavLinkStyles";

export const theme = extendTheme({
    fonts: {
    heading: "Lusitana",
    body: "Lusitana",
  },
    styles: {
        global: {
            'html, body': {
        backgroundColor: '#F0ECD3',
                lineHeight: 'tall',
        color: '#59352B',
      },
        },
    },
    colors: {
        red: "#C46060",
        orange: "#DDA045",
        eggshell: "#F0ECD3",
        vanilla: "#C7BD9F",
        cyan: "#6F9E90",
        brown: "#59352B",
    },
    components: {
        Button,
        NavLink,
    },
});