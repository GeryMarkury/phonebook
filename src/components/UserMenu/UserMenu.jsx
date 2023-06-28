import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import css from './UserMenu.module.css';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <div className={css.wrapper}>
      <p className={css.usermail}>{user.email}</p>
      <Button variant={'primary'} size={'sm'} type="button" onClick={() => dispatch(logOut())}>
        Logout
      </Button>
    </div>
  );
};
