import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
    <div className='body bg-light text-dark'>
        <header className="container-fluid">
            <nav className="navbar fixed-top">
                <a className="navbar-brand">Ball is Life<sup>&reg;</sup></a>
                <menu className="navbar-nav">
                    <li className="nav-item"><a className="nav-link" href="login.html">Login</a></li>
                    <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
                    <li className="nav-item"><a className="nav-link" href="about.html">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="preferences.html">Preferences</a></li>
                </menu>
            </nav>
            <br />
        </header>

        <main>
            <h2>Welcome to Ball is Life</h2>
            <img alt="ball" src="https://cdn.vectorstock.com/i/500p/79/05/basketball-vector-18437905.jpg" className="rounded" width="300"/>
            <br />
            <table>
                <tr>
                    <th>WebSocket Data here</th>
                </tr>
                <tr>
                    <td>
                        WebSocket Data (will display posts that other users have created, 
                        showing data they input such as location and time info or how many 
                        players are needed for a pickup game)
                    </td>
                </tr>
            </table>
            <br />
            <form method="get" action="post.html">
                <button type="submit" className="btn btn-primary">Create Game</button>
            </form>
            <br />
        </main>

        <footer>
            <br />
            <span className="text-reset">Created by Carter Williams</span>
            <a href="https://github.com/CarterW1572/startup">GitHub</a>
        </footer>
    </div>
);
}