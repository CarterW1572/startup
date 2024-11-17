import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './home.css';

export function Home() {
    const navigate = useNavigate();
    const [weather, setWeather] = React.useState('72');

    function createGame() {
        navigate('/post');
    }

    function getWeather() {
        fetch('https://api.open-meteo.com/v1/forecast?latitude=46.9481&longitude=7.4474&current=temperature_2m,relative_humidity_2m,rain,weather_code', {
            method: 'get',
            header: {'Content-type': 'application/json; charset=UTF-8'}
        })
            .then((response) => response.json())
            .then((weather) => {
                setWeather(weather.current.temperature_2m * (9/5) + 32);
            });
    }

    return (
        <main>
            <h2>Welcome to Ball is Life</h2>
            <img alt="ball" src="https://cdn.vectorstock.com/i/500p/79/05/basketball-vector-18437905.jpg" className="rounded" width="300"/>
            <br />
            <span>{weather}°</span>
            <Button onClick={getWeather}>Weather</Button>
            <br />
            <table>
                <thead>
                    WebSocket Data here
                </thead>
                <tbody>
                    WebSocket Data (will display posts that otehr users have created, 
                    showing data they input such as location and time info or how many 
                    players are needed for a pickup game)
                </tbody>
            </table>
            <br />
            <Button variant='primary' onClick={createGame}>Create Game</Button>
            <br />
        </main>
    );
}