import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import css from '../NameForm/NameForm.module.css';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
    <FormControl isRequired><div className={css.form}><FormLabel>Email: </FormLabel>
      <Input variant="nameForm" type="email" name="email"></Input>
      <FormLabel>Password: </FormLabel>
      <Input variant="nameForm" type="password" name="password"></Input>
        <Button w='130px' variant={'primary'} size={'md'} type="submit" onSubmit={handleSubmit}>Log In</Button>
        </div></FormControl></form>
  );
};