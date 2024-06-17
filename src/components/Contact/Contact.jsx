import { deleteContact } from '../../redux/contactsOps';
import { useDispatch } from 'react-redux';

function Contact({name, number, id}) {
  const dispatch = useDispatch();

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button onClick={() => dispatch(handleDelete)}>Delete</button>
    </div>
  );
}

export default Contact;