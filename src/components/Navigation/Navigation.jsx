import { NavLink } from 'react-router-dom';
import { Box, useStyleConfig } from '@chakra-ui/react';
import { useAuth } from 'hooks';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();
  
const StyledNavLink = (props) => {
const { baseStyle, ...rest } = props
const styles = useStyleConfig('NavLink', baseStyle);

  return <Box as={NavLink} sx={styles} {...rest} />;
};

  return (
    <nav>
      <StyledNavLink to="/">
        Home
      </StyledNavLink>
      {isLoggedIn && (
        <StyledNavLink to="/contacts">
          Contacts
        </StyledNavLink>
      )}
    </nav>
  );
};