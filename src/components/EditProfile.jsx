import React, { useState } from 'react'
import UserCard from './UserCard';
import { useDispatch } from 'react-redux';
import {addUser} from '../store/userSlice';
import axios from 'axios';
import {BASE_URL} from '../utils/constants';

const EditProfile = ({user}) => {
    const [firstName, setFirstName] = useState(user.firstName || "");
    const [lastName, setLastName] = useState(user.lastName || "");
    const [gender, setGender] = useState(user.gender ||"");
    const [age, setAge] = useState(user.age || "");
    const [photoURL, setPhotoURL] = useState(user.photoURL || "");
    const [about, setAbout] = useState(user.about || "");
    const [error, setError] = useState("");
    const dispatch = useDispatch();

    const handleSaveProfile = async() => {
        try{
            setError("");
            const URL = BASE_URL + "/profile/edit";
            const res = await axios.patch(URL,{firstName, lastName, gender, age, photoURL, about}, {withCredentials:true});
            console.log(res)
            dispatch(addUser(res?.data?.data));
        }catch(err){
            setError(err?.response?.data || "Something went  wrong...")
        }
    }

    return (
        <>
        <div className='flex justify-center my-2 gap-4'>
            <div className="card bg-base-300 w-96 shadow-sm">
                
                <div className="card-body">
                    <h2 className="card-title justify-center">Edit Profile</h2>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">First Name</legend>
                        <input type="text" className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Last Name</legend>
                        <input type="text" className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Gender</legend>
                        <input type="text" className="input" value={gender} onChange={(e) => setGender(e.target.value)} />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Age</legend>
                        <input type="text" className="input" value={age} onChange={(e) => setAge(e.target.value)} />
                    </fieldset>
                     <fieldset className="fieldset">
                        <legend className="fieldset-legend">About</legend>
                        <textarea className="textarea" value={about} onChange={(e) => setAbout(e.target.value)} ></textarea>                  
                    </fieldset>
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Profile URL</legend>
                        <input type="text" className="input" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} />
                    </fieldset>
                   

                    <div className="card-actions justify-center">
                        <button className="btn btn-primary" onClick={handleSaveProfile} >Save Profile</button>
                    </div>
                </div>
                

            </div>
    
            <UserCard user={{firstName, lastName, gender, age, about, photoURL}} ></UserCard>
            

        </div>
        <div className="toast toast-top toast-center ">
  
  <div className="alert alert-success">
    <span>Profile Updated Successfully!</span>
  </div>
</div>
        </>
    )
}

export default EditProfile