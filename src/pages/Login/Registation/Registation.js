import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import './Registation.css'
import SocialShare from '../SocialShare/SocialShare';
const Registation = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    const [updateProfile, updating, error1] = useUpdateProfile(auth)

    const navigate = useNavigate()
    const [agree, setAgree] = useState(false)

    

    const handleNavigateLogin = event => {
        navigate('/login')
    }

    const handleRegister = async(event) => {
        event.preventDefault()

        const name = event.target.text.value
        const email = event.target.email.value
        const password = event.target.password.value

        // console.log(event.target.text.value)
            await createUserWithEmailAndPassword(email, password)
            await updateProfile({ displayName:name });
          alert('Updated profile');

          navigate('/login')
        
       
    }

    if (user) {
        navigate('/login')
    }
    return (
        <div className='container'>
            <h2 className='from-text'>Please Register</h2>
            <form action="" className='form-control' onSubmit={handleRegister}>
                <input type="text" name="text" id="" placeholder='Enter your Name' />
                <br />
                <input type="email" name="email" id="" placeholder='Your E-mail' required />
                <br />
                <input type="password" name="password" id="" placeholder='Your password' required />
                <br />

                <div className='check-box'>
                    <input onClick={()=>setAgree(!agree)}  type="checkbox" name='terms' id='terms' />
                    
                        <label htmlFor="terms" className={agree ? "text-primary" : 'text-danger'}>Accept Car Service Terms And Condition</label>
                    
                </div>

                <br />
                <input
                disabled={!agree}
                 type="submit" value="Register" />

                <p>Already have an account? <Link to='/login' className='tex-danger pe-auto text-decoration-none' onClick={handleNavigateLogin}>Login Now</Link></p>

            </form>
            <SocialShare></SocialShare>
        </div>

    );
};

export default Registation;