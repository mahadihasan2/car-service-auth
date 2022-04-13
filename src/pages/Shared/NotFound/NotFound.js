import React from 'react';
import sleeping from '../../../images/404.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found-container'>
            <h1>Macing is 404</h1>
            <img src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;