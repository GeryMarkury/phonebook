import { Filter } from './Filter/Filter';
import css from './ContactsList.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';

export function ContactsList() {
  
const filter = useSelector(state => state.filter);
const contacts = useSelector(state => state.contacts.items);

  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));


  return (
    <div>
      <Filter />
      {visibleContacts.length > 0 ? (<ul className={css.list}>
        {visibleContacts.map(({ id, name, phone }) => (
          <li key={id} className={css.listItem}>
            {name}: {phone}
            <button type="button" onClick={()=>dispatch(deleteContact(id))} className={css.listBtn}>Delete</button>
          </li>
        ))}
      </ul>) : (<p>There are no contacts to display.</p>)}
    </div>
  )
};