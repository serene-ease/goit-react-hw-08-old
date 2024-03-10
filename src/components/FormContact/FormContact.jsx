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

