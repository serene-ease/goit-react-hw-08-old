import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';
import { selectAuth } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';

const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useSelector(selectAuth);

    const handleClick = (actions) => {
          dispatch(logOut())
            .unwrap()
            .then(() => {
                toast.success('Goodbye!', {
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
            .catch(setLoad(false))
    }

    return (
        <div className={css.nav}>
            <p className={css.text}>Welcome, {user.name}</p>
            <NavLink to="/contacts" className={buildLinkClass}>
                Your Contacts
            </NavLink>

        </div>
    );
};

export default UserMenu;