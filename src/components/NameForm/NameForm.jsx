import { useState } from 'react';
import css from './NameForm.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { nanoid } from '@reduxjs/toolkit';


export default function NameForm() {
    const contacts = useSelector(state => state.contacts.items);

    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');


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
            phone,
            id: nanoid(),
        }));
        setName('');
        setPhone('');
    };

        return (
            <form className={css.form}>
                <label>Name: <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={event => setName(event.currentTarget.value)}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                    required
                /></label>
                <label>Number: <input
                    type="tel"
                    name="number"
                    value={phone}
                    onChange={event => setPhone(event.currentTarget.value)}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                    required
                /></label>
                <button type="button" onClick={handleOnClick} className={css.formBtn}>Add contact</button>
                </form>
                )
    }
