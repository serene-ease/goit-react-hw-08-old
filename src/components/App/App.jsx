///////////////Library//////////////
import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from 'react-router-dom';
////////////////////////////////////
import { refreshUser } from '../../redux/auth/operations.js';
import { selectAuth } from '../../redux/auth/selectors.js';
import { Layout } from "../Layout.jsx";
/////////////Components/////////////
import Loader from '../Loader/Loader.jsx'
import RestrictedRoute from '../Routes/RestrictedRoute.jsx';
import PrivateRoute from '../Routes/PrivateRoute.jsx';
////////////////Pages///////////////
const HomePage = lazy(() => import('../../pages/Home/Home.jsx'));
const ContactsPage = lazy(() => import('../../pages/Contacts/Contacts.jsx'));
const LoginPage = lazy(() => import('../../pages/Login/Login.jsx'));
const RegisterPage = lazy(() => import('../../pages/Register/Register.jsx'));



export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = selectAuth

  //Call an operation
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return isRefreshing ? (
    <Loader />
  ) : (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LoginPage />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />
        </Route>
      </Routes>
    </>
  )
}


