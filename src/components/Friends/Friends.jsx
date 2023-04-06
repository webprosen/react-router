import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../Friend/Friend';
import './Friends.css';

const Friends = () => {
    const friends = useLoaderData();

    return (
        <div className='friends'>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend} enemy="devil"></Friend>)
            }
        </div>
    );
};

export default Friends;