import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
const Login = () => {
    const emailRef = useRef('')
    const passwordRef = useRef('')

    const navigate = useNavigate()


    const handleFromSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value 
        const password = passwordRef.current.value 

        console.log(email,password)
    }


    const handleNavigateRegister = event =>{
        navigate ('/register')
    }

    return (
        <div className='container'>
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
                <input type="submit" value="Submit"  />

                <p>welcome to car website? <Link to='/register' className='tex-danger pe-auto text-decoration-none' onClick={handleNavigateRegister}>Resister Now</Link></p>
            </Form>
            
        </div>
    );
};

export default Login;