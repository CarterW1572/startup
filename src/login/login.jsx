import React from 'react';
import './login.css';

export function Login() {
    return (
        <main>
            <h2>Login</h2>
            <span>(If you don't have a login, you can also create a login here)</span>
            <form method="get" action="index.html">
                <div class="input-group mb-3">
                    <span class="input-group-text">username</span>
                    <input class="form-control" type="text" placeholder="email/username" />
                </div>
                <div class="input-group mb-3">
                    <span class="input-group-text">password</span>
                    <input class="form-control" type="password" placeholder="password" />
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
                <button type="submit" class="btn btn-secondary">Create</button>
            </form>
        </main>
    );
}