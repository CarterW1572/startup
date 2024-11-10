import React from 'react';
import { Button } from 'react-router-dom';
import './login.css';

export function Login() {
    return (
        <main>
            <h2>Login</h2>
            <span>If you don't have a login, you can also create a login here</span>
            <form method="get" action="index.html">
                <div className="input-group mb-3">
                    <span className="input-group-text">username</span>
                    <input className="form-control" type="text" placeholder="email/username" />
                </div>
                <div className="input-group mb-3">
                    <span className="input-group-text">password</span>
                    <input className="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                <button type="submit" className="btn btn-secondary">Create</button>
            </form>
        </main>
    );
}