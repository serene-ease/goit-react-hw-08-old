import { NavLink } from "react-router-dom"
// import style from './NavigationAuth.module.css';


export const NavigationAuth = () => {
    return (
        <div>
            <NavLink to='/register'>
                Register
            </NavLink>
            <NavLink to='/login'>
                Log In
            </NavLink>
        </div>
    )
}