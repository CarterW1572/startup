import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { AuthState } from './login/authState'
import { Home } from './home/home';
import { About } from './about/about';
import { Post } from './post/post';
import { Preferences } from './preferences/preferences';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function App() {
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
    <BrowserRouter>
    <div className='body bg-light text-dark'>
        <header className="container-fluid">
            <nav className="navbar fixed-top">
                <a className="navbar-brand">Ball is Life<sup>&reg;</sup></a>
                <menu className="navbar-nav">
                    <li className="nav-item"><NavLink className='nav-link' to='login'>Login</NavLink></li>
                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className='nav-link' to=''>Home</NavLink></li>)}
                    <li className="nav-item"><NavLink className='nav-link' to='about'>About</NavLink></li>
                    {authState === AuthState.Authenticated && (<li className="nav-item"><NavLink className='nav-link' to='preferences'>Preferences</NavLink></li>)}
                </menu>
            </nav>
            <br />
        </header>

        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login userName={userName} authState={authState} onAuthChange={(userName, authState) => {setAuthState(authState);
                setUserName(userName);}}/>} />
            <Route path='/about' element={<About />} />
            <Route path='/post' element={<Post />} />
            <Route path='/preferences' element={<Preferences />} />
        </Routes>

        <footer>
            <br />
            <span className="text-reset">Created by Carter Williams</span>
            <a href="https://github.com/CarterW1572/startup">GitHub</a>
        </footer>
    </div>
    </BrowserRouter>
);
}

export default App;