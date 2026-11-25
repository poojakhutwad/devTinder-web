import React, {useEffect} from 'react'
import { useDispatch, useSelector} from 'react-redux';
import {BASE_URL} from "../utils/constants";
import axios from 'axios';
import {addConnections} from "../store/connectionsSlice";
import ConnectionCard from './ConnectionCard';

const Connections = () => {
    const dispatch = useDispatch();
    const connections = useSelector((store) => store.connections);
    console.log('connections--->',connections)

   

    const handleConnections = async () => {
        const URL = BASE_URL + "/user/connections";
        const res = await axios.get(URL, {withCredentials:true});
        console.log(res.data.data);
        dispatch(addConnections(res?.data?.data));
    }

    useEffect(() =>{
        handleConnections();
    },[]);
     if(!connections) return;

    if(connections.length === 0) return <div>No Connections Found!</div>
  return (
    <>
   
        <ConnectionCard  connections={connections} page={"connections"}></ConnectionCard>

   
    </>
  )
}

export default Connections;