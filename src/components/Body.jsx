import React, {useEffect} from 'react'
import Navbar from './Navbar'
import { Outlet , useNavigate} from 'react-router-dom'
import Footer from './Footer'
import { useDispatch , useSelector} from 'react-redux';
import { addUser } from '../store/userSlice';
import { BASE_URL } from '../utils/constants';
import axios from 'axios';  


const Body
 = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData  = useSelector((store) => store.user)
   const fetchUser = async () => {
    try {
      if(userData) return;
      const URL = BASE_URL + "/profile/view";
      const res =  await axios.get(URL,{withCredentials: true});
      dispatch(addUser(res.data));
    } catch (err) {
      if(err.status === 401){
        navigate('/login');
      }
      console.error(err);
    }
  }

  useEffect(() => {
    fetchUser();
  }, []);
  return (
    <>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </>
  )
}

export default Body
