import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { BASE_URL } from "../utils/constants";
import axios from 'axios';
import { addRequests } from "../store/requestsSlice";
import ConnectionCard from './ConnectionCard';

const Requests = () => {
    const dispatch = useDispatch();
    const requests = useSelector((store) => store.requests);
    console.log('requests--->', requests)

    const handleConnections = async () => {
        const URL = BASE_URL + "/user/requests/received";
        const res = await axios.get(URL, { withCredentials: true });
        console.log(res.data.data);
        dispatch(addRequests(res?.data?.data));
    }

    useEffect(() => {
        handleConnections();
    }, []);

    if (!requests) return;

    if (requests.length === 0) return <div>No Requests Found!</div>

    return (
        <>
            <ConnectionCard connections={requests} page={"requests"}></ConnectionCard>
        </>
    )
}

export default Requests