import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import './Service.css';
const Service = ({ service }) => {
    const { _id, name, img, description, price } = service
    const navigate = useNavigate()
    const handleNavigateToServiceDetails = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-container'>
            <Helmet>
                <title>service- car-service</title>
            </Helmet>
            <img src={img} alt="" />
            <h2>Name: {name}</h2>
            <p>Price: {price}</p>
            <p>{description}</p>
            <button onClick={() => handleNavigateToServiceDetails(_id)}>Book: {name}</button>
        </div>
    );
};

export default Service;