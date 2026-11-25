import React from 'react'
import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from '../utils/constants';
import axios from 'axios';
import { addFeed } from '../store/feedSlice';
import UserCard from "./UserCard";

const Feed = () => {
  const feed =  useSelector((store) => store.feed);
  const dispatch = useDispatch();

  const getFeed =  async() => {
    try{
      const URL = BASE_URL + "/feed";
      const res =  await axios.get(URL,{withCredentials: true});
      dispatch(addFeed(res.data));

    }catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    getFeed();
  },[]);
  console.log(feed)
  return (
     <div>
      {feed && <UserCard user={feed[0]}></UserCard>}
    </div>
  )
}

export default Feed