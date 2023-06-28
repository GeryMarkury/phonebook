import { defineStyleConfig } from "@chakra-ui/react";

export const NavLinkStyles = defineStyleConfig({
    baseStyle: {
    textDecoration: 'none',
    display: 'inline-block',
    position: 'relative',
    padding: '12px',
    fontWeight: '700',
    color: 'brown',
    _hover: {
        color: 'orange',
        _after: {
        transform:'scaleX(1)',
        },
        },
    _active: {
      color: 'orange',
        },
    _focus: {
      color: 'orange',
        },
    _after: {
content: '""',
  position: 'absolute',
  bottom: '-5px',
  left: '0',
  width: '100%',
  height: '2px',
  backgroundColor: 'orange',
transform: 'scaleX(0)',
  transition: 'transform 0.3s ease',
    }
  },
});