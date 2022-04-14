import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import './Registation.css'
import SocialShare from '../SocialShare/SocialShare';
const Registation = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

   const navigate = useNavigate()


    const handleNavigateLogin = event =>{
        navigate ('/login')
    }

    const handleRegister= event =>{
        event.preventDefault()

        const name = event.target.text.value
        const email = event.target.email.value
        const password =event.target.password.value

        // console.log(event.target.text.value)

        createUserWithEmailAndPassword(email,password)
    }

    if(user){
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
                <input type="submit" value="Register"  />

                <p>Already have an account? <Link to='/login' className='tex-danger pe-auto text-decoration-none' onClick={handleNavigateLogin}>Login Now</Link></p>
            </form>
            <SocialShare></SocialShare>
        </div>
      
    );
};

export default Registation;