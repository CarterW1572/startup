import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Message } from './message';
import './login.css';

export function Login() {
    const navigate = useNavigate();
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);
  
    async function loginUser() {
        loginOrCreate(`/api/auth/login`);
      }
    
      async function createUser() {
        loginOrCreate(`/api/auth/create`);
      }
    
      async function loginOrCreate(endpoint) {
        const response = await fetch(endpoint, {
          method: 'post',
          body: JSON.stringify({ email: userName, password: password }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        if (response?.status === 200) {
          localStorage.setItem('userName', userName);
          navigate('/');
        } else {
          const body = await response.json();
          setDisplayError(`⚠ Error: ${body.msg}`);
        }
      }

    return (
        <main>
            <h2>Login</h2>
            <span>If you don't have a login, you can also create a login here</span>
            <div className='input-group mb-3'>
                <span className='input-group-text'>username</span>
                <input className='form-control' type='text' value={userName} onChange={(e) => setUserName(e.target.value)} placeholder='username' />
            </div>
            <div className='input-group mb-3'>
                <span className='input-group-text'>password</span>
                <input className='form-control' type='password' onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            </div>
            <Button variant='primary' onClick={() => loginUser()} disabled={!userName || !password}>Login</Button>
            <Button variant='primary' onClick={() => createUser()} disabled={!userName || !password}>Create</Button>
            <br />

            <Message message={displayError} onHide={() => setDisplayError(null)} />
        </main>
    );
}