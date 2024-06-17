import Contact from '../Contact/Contact';
import { nanoid } from 'nanoid';
import { useSelector} from 'react-redux';
import { selectError, selectIsLoading } from "../../redux/selectors";
import { filteredContacts } from "../../redux/contactsOps";

function ContactList() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const contacts = useSelector(filteredContacts);

  return (
    <ul>
      {isLoading && !error && <b>Request in progress...</b>}
      {contacts.map(contact => {
        const id = nanoid();
        return (
          <li key={id}>
            <Contact
              id={contact.id}
              name={contact.name}
              number={contact.number}
            />
          </li>
        );
      })}
    </ul>
  );
}

export default ContactList;
