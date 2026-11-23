import axios from 'axios';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../utils/constants';

const Login = () => {
  const [emailId, setEmail ] = useState("pooja@gmail.com");
  const [password, setPassword] = useState("Pooja@22");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClickLogin =  async() => {
    try{
      const URL = BASE_URL + "/login";
      const result = await axios.post(URL, { emailId, password},{withCredentials: true});
      console.log(result);
      dispatch(addUser(result.data))
      navigate('/');
    }catch(err){
      setError(err?.response?.data || "Something went wrong");
      console.error(err);
    }
  }

  return (
    <div className='flex justify-center my-10'>
      <div className="card bg-base-300 w-96 shadow-sm">
 <figure>
    <img
      src="https://images.unsplash.com/photo-1521737711867-e3b97375f902"
      alt="Developer networking"
      className=" h-52 w-full object-cover"
    />
  </figure>
  <div className="card-body">
     <h2 className="card-title">Login</h2>
    <fieldset className="fieldset">
  <legend className="fieldset-legend">Email</legend>
  <input type="text" className="input" value={emailId} onChange={(e) => setEmail(e.target.value)} />
</fieldset>
 <fieldset className="fieldset">
  <legend className="fieldset-legend">Password</legend>
  <input type="text" className="input" value={password} onChange={(e) => setPassword(e.target.value)} />
</fieldset>
  <p className="text-error">{error}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary" onClick={handleClickLogin}>LOGIN</button>
    </div>
  </div>
</div>
   
</div>
  )
}

export default Login