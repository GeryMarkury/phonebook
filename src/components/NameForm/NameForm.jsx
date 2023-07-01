import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { selectAllContacts } from 'redux/selectors';
import { FormControl, FormLabel, Input, Button } from '@chakra-ui/react';


export default function NameForm() {
    const contacts = useSelector(selectAllContacts);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [number, setNumber] = useState('');


    const handleOnClick = () => {
          const contactExists = contacts.find(
            contact => contact.name.toLowerCase() === name.toLowerCase()
        );
        if (contactExists) {
            alert(`${name} is already in contacts.`);
            return;
        }
        dispatch(addContact({
            name,
            number,
        }));
        setName('');
        setNumber('');
    };

    return (
        <FormControl isRequired>
            <FormLabel>Name: </FormLabel>
            <Input variant="nameForm" type="text" name="name" value={name} onChange={event => setName(event.currentTarget.value)} pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$" title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"></Input>
            <FormLabel>Number: </FormLabel>
            <Input variant="nameForm" type="tel" name="number" value={number} onChange={event => setNumber(event.currentTarget.value)} pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}" title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"></Input>
            <Button variant={'primary'} size={'sm'} type="button" onClick={handleOnClick}>Add contact</Button>
        </FormControl>
    )
    }
