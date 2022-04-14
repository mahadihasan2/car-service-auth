import React from 'react';
import google from '../../../images/social/Google.png'
import facebook from '../../../images/social/facebook.png'
import github from '../../../images/social/github.png'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';


const SocialShare = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub , user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate()

    let errorElement;

    if (error || error1) {
        errorElement = <div>
            <p className='text-danger'>Halar pula age Registetion kor</p>
        </div>

    }

    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='mt-3 d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
                <p className=' mt-2 px-2'>or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50'></div>
            </div>
            <div className='text-center'>
                {errorElement}
            </div>
            <div className='text-center'>

                <button onClick={() => signInWithGoogle()}
                    style={{ height: '50px', border: 'none', color: 'white', font: 'bold' }} className='bg-primary w-50 fs-5 '>
                    <img style={{ width: '30px' }} src={google} alt="" /> Google Sign</button>

            </div>


            <div className='text-center'>

                <button style={{ height: '50px', border: 'none', color: 'white', font: 'bold' }} className='bg-primary w-50 fs-5 mt-3  '>
                    <img style={{ width: '30px' }} src={facebook} alt="" /> Facebook sign</button>

            </div>
            <div className='text-center'>

                <button onClick={()=>signInWithGithub()}
                style={{ height: '50px', border: 'none', color: 'white', font: 'bold' }} className='bg-primary w-50 fs-5 mt-3 '>
                    <img style={{ width: '30px' }} className='mx-2' src={github} alt="" />Github sign</button>

            </div>
        </div>
    );
};

export default SocialShare;