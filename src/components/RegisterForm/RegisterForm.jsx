import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import css from '../NameForm/NameForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
    <FormControl isRequired><div className={css.form}>
      <FormLabel>Username: </FormLabel>
      <Input variant="nameForm" type="text" name="name"></Input>
      <FormLabel>Email: </FormLabel>
      <Input variant="nameForm" type="email" name="email"></Input>
      <FormLabel>Password: </FormLabel>
      <Input variant="nameForm" type="password" name="password"></Input>
        <Button w='130px' variant={'primary'} size={'md'} type="submit">Register</Button></div>
      </FormControl>
      </form>
  );
};
