import React from 'react';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './home.css';

export function Home() {
    const navigate = useNavigate();

    function createGame() {
        navigate('/post');
    }

    function test() {
        console.log("Button clicked");
        fetch('/api/test')
            .then((response) => response.json())
            .then((testing) => {
                console.log(testing.test);
            });
    }

    return (
        <main>
            <h2>Welcome to Ball is Life</h2>
            <img alt="ball" src="https://cdn.vectorstock.com/i/500p/79/05/basketball-vector-18437905.jpg" className="rounded" width="300"/>
            <br />
            <table>
                <thead>
                    <th>WebSocket Data here</th>
                </thead>
                <tbody>
                    <td>
                        WebSocket Data (will display posts that otehr users have created, 
                        showing data they input such as location and time info or how many 
                        players are needed for a pickup game)
                    </td>
                </tbody>
            </table>
            <br />
            <Button onClick={test}>Test</Button>
            <Button variant='primary' onClick={createGame}>Create Game</Button>
            <br />
        </main>
    );
}