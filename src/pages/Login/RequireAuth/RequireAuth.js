import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification] = useSendEmailVerification(auth);
    const [user] = useAuthState(auth);
    const location = useLocation()

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    if (!user.emailVerified) {
        return <div>
            <h3 className='text-danger'>Your email is not verify</h3>
            <p className='text-success'>Your email verified</p>
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>
        </div>
    }
    return children;
};

export default RequireAuth;