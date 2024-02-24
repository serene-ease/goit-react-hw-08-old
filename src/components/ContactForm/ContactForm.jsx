import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { addContact } from '../../redux/operations';
import style from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleAdd = event => {
    event.preventDefault();
    const form = event.target;
    /////////////////////////////////////////////////////
    console.log(event.target.elements.text.value)
    console.log(event.target.elements.text)
    console.log(event.target.elements)
    console.log(event.target)
    ////////////////////////////////////////////////////
    dispatch(addContact(event.target.elements.text.value));
    form.reset();
  };

  const formFields = [
    { name: 'name', type: 'text', decor: 'Username' },
    { name: 'number', type: 'tel', decor: 'Number' },
  ];

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

  return (
    <Formik
      initialValues={{
        name: '',
        phone: '',
      }}
      validationSchema={validationSchema}
      onSubmit={handleAdd}
    >
      <Form className={style.form}>
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