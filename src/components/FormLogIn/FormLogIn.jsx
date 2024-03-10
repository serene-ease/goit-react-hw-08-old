import { useDispatch } from "react-redux";
import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import toast from 'react-hot-toast';
import { logIn } from "../../redux/auth/operations";

const validation = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .required("Required field!"),
    password: Yup.string()
        .min(8, "Not enough symbols!")
        .max(24, "Too long!")
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required("Required field!"),
});

const LogInForm = () => {
    const [load, setLoad] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (values, actions) => {
        setLoad(true);
        dispatch(logIn({ ...values }))
            .unwrap()
            .then(() => {
                toast.success('Welcome!', {
                    style: {
                        border: '1px solid #0d47a1',
                        padding: '16px',
                        color: '#111',
                    },
                    iconTheme: {
                        primary: '#2196f3',
                        secondary: '#fff',
                    },
                });
                actions.resetForm();
                setLoad(false);
            })
            .catch(() => {
                toast.error('Oops, something go wrong!', {
                    style: {
                        border: '1px solid #F1041B',
                        padding: '16px',
                        color: '#111',
                    },
                    iconTheme: {
                        primary: '#F1041B',
                        secondary: '#fff',
                    },
                });
                setLoad(false);
                })
    };

    const initialValues = {
        email: "",
        password: "",
    };

    return (
        <div>
            <Formik
            initialValues={initialValues}
            validationSchema={validation}
            onSubmit={handleSubmit}
            >

            </Formik>
        </div>
    )}