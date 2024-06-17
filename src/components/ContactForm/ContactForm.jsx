import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';

const dataSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
  number: Yup.string()
    .min(3, 'Too short!')
    .max(50, 'Too long!')
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{ username: "", number: "" }}
      validationSchema={dataSchema}
      onSubmit={(values, actions) => {
        const newContact = {
          name: values.username,
          number: values.number,
        };
        dispatch(addContact(newContact));
        actions.resetForm();
      }}
    >
      <Form className={css.formElement}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field
          className={css.dataInputField}
          type="text"
          name="name"
          id={nameFieldId}
        />
        <ErrorMessage name="name" component="span" />

        <label htmlFor={numberFieldId}>Phone</label>
        <Field
          className={css.dataInputField}
          type="text"
          name="number"
          id={numberFieldId}
        />
        <ErrorMessage name="number" component="span" />

        <button className={css.submitButton} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
