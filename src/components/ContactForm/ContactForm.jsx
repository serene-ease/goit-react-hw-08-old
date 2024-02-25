import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { addContact } from '../../redux/operations';
import style from './ContactForm.module.css';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name should be at least 3 characters long')
    .max(50, 'Name should be at most 50 characters long')
    .required('Name is required'),
  phone: Yup.string()
    .matches(/^\d+$/, 'Invalid phone number')
    .min(9, 'Phone number should be at least 9 digits long')
    .required('Phone number is required'),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit =  (event) => {
    event.preventDefault();
    dispatch(addContact({ name: event.target.name.value, phone: event.target.phone.value}));
    
}

  const formFields = [
    { name: 'name', type: 'text', decor: 'Contact name', id: nanoid()},
    { name: 'phone', type: 'tel', decor: `phone`, id: nanoid()},
  ];



  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={style.form} onSubmit={handleSubmit}>
        <ul className={style.list}>
          {formFields.map(field => (
            <li className={style.listItem} key={field.name}>
              <label className={style.label} htmlFor={field.name}>{field.decor}</label>
              <Field className={style.input} name={field.name} type={field.type} />
              <ErrorMessage className={style.error} name={field.name} component="span" />
            </li>
          ))}
        </ul>
        <button type="submit">Add contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;