import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {

    const { serviceId } = useParams()
    return (
        <div>
            <h2 className='text-center'>This is Service Details:{serviceId}</h2>
            <div className='text-center mt-5'>
                <Link to='/checkout'>
                    <button className='btn btn-primary '>Processed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;