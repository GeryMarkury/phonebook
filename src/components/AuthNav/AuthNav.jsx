import { NavLink } from 'react-router-dom';
import { Box, useStyleConfig } from '@chakra-ui/react';

export const AuthNav = () => {

  const StyledNavLink = (props) => {
const { baseStyle, ...rest } = props
const styles = useStyleConfig('NavLink', baseStyle);

  return <Box as={NavLink} sx={styles} {...rest} />;
  };
  
  return (
    <div>
      <StyledNavLink to="/register">
        Register
      </StyledNavLink>
      <StyledNavLink to="/login">
        Log In
      </StyledNavLink>
    </div>
  );
};
