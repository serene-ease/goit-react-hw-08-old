import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar } from './AppBar/AppBar'
import Loader from './Loader/Loader';
// import style from './Layout.module.css'

export const Layout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Loader/>}>a
                <Outlet />
            </Suspense>
            <Toaster position="top-right" reverseOrder={false} />
        </div>
    );
};