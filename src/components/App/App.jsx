///////////////Library//////////////
import { useEffect, lazy } from "react";
import { useDispatch} from "react-redux";
import { Route, Routes } from 'react-router-dom';
////////////////////////////////////
import { refreshUser } from '../../redux/auth/operations.js';
import { useAuth } from '../../hooks/useAuth.js'
/////////////Components/////////////


export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();
  
  const error = useSelector(selectError)

  //Call an operation
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch])

  return  isRefreshing ?  (
    <b>Refreshing user...</b>
  ) : (

  )
}


