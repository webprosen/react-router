import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const FriendDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    return (
        <div>
            <h2>Name is: {details.name}</h2>
            <h2>Address is: {details.address.street}</h2>
            <button onClick={goBack}>Go Back</button>
        </div>
    );
};

export default FriendDetails;