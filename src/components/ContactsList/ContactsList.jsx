import { Filter } from './Filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectAllContacts, selectFilter } from 'redux/selectors';
import { Button, ListItem, UnorderedList } from '@chakra-ui/react';
import css from './ContactsList.module.css';

export function ContactsList() {
  
const filter = useSelector(selectFilter);
const contacts = useSelector(selectAllContacts);

  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));


  return (
    <div>
      <Filter />
      {visibleContacts.length > 0 ? (<UnorderedList spacing='10px'>
        {visibleContacts.map(({ id, name, number }) => (
          <ListItem key={id}>
            <div className={css.listItem}><div>{name}: {number}</div>
            <Button variant={'primary'} size={'xs'} type="button" onClick={()=>dispatch(deleteContact(id))}>Delete</Button></div>
          </ListItem>
        ))}
      </UnorderedList>) : (<p>There are no contacts to display.</p>)}
    </div>
  )
};