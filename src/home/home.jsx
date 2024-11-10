import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './home.css';

export function Home() {
  return (
    <main>
        <h2>Welcome to Ball is Life</h2>
        <img alt="ball" src="https://cdn.vectorstock.com/i/500p/79/05/basketball-vector-18437905.jpg" class="rounded" width="300"/>
        <br />
        <table>
            <tr>
                <th>WebSocket Data here</th>
            </tr>
            <tr>
                <td>
                    WebSocket Data (will display posts that otehr users have created, 
                    showing data they input such as location and time info or how many 
                    players are needed for a pickup game)
                </td>
            </tr>
        </table>
        <br />
        <NavLink className='nav-link' to='post'>Create Game</NavLink>
        <br />
    </main>
  );
}