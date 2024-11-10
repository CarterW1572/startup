import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './login.css';

export function Login() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/');
    };

    return (
        <main>
            <h2>Login</h2>
            <span>If you don't have a login, you can also create a login here</span>
            <div className="input-group mb-3">
                <span className="input-group-text">username</span>
                <input className="form-control" type="text" placeholder="email/username" />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">password</span>
                <input className="form-control" type="password" placeholder="password" />
            </div>
            <Button variant='primary' onClick={handleClick}>Login</Button>
            <Button variant='primary' onClick={handleClick}>Create</Button>
        </main>
    );
}