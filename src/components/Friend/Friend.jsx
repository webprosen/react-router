import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Friend.css';

const Friend = ({friend}) => {

    const navigate = useNavigate();

    const handler = () => {
        navigate(`/friend/${friend.id}`)
    }

    return (
        <div className='friend'>
            <h2>{friend.name}</h2>
            <p>{friend.email}</p>
            <p><Link to={`/friend/${friend.id}`}>Details</Link></p>
            <button onClick={handler}>View More</button>
        </div>
    );
};

export default Friend;