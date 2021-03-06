import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialShare from '../SocialShare/SocialShare';
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate();
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
      );

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
  let errorElement;

    const handleFromSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value 
        const password = passwordRef.current.value 

        signInWithEmailAndPassword(email,password)
    }


    if(user){
        navigate(from, { replace: true });
    }

    const handleNavigateRegister = event =>{
        navigate ('/register')

        
    }

    const handleResetPassword = async() =>{
        const email = emailRef.current.value 
        await sendPasswordResetEmail(email);
        alert('Sent email');

    }

    if (error) {
        errorElement = <div>
            <p className='text-danger text-center'>Halar pula age Registetion kor</p>
        </div>

    }

    return (
        <div className='container'>
            <Helmet>
                <title>Login-car service</title>
            </Helmet>
            <h2 className='from-text'>Please Login</h2>


            <Form className='form-control' onSubmit={handleFromSubmit} >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password"  required/>
                </Form.Group>
                <input type="submit" value="Login"  />

                <p>welcome to car website? <Link to='/register' className='tex-danger pe-auto text-decoration-none' onClick={handleNavigateRegister}>Resister Now</Link></p>

                <p>Forget Password? <Link to='/register' className='tex-danger pe-auto text-decoration-none' onClick={handleResetPassword}>Rset Password</Link></p>
                
            </Form>
             {errorElement}
            <SocialShare></SocialShare>
            
        </div>
    );
};

export default Login;