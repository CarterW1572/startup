import React from 'react';
import './about.css';

export function About() {
    return (
        <main>
            <h2>About Ball is Life</h2>
            <br />
            <text>
                Ball is Life is a web application created to allow casual basketball players to find pickup games
                near them whenever they feel like playing. It also allows them to create games to invite others to join
                when just a few more people are needed for a good game of pickup.
            </text>
            <br />
            <text>
                Ball is Life was inspired by the creator's brother, who loves playing basketball, but often doesn't
                have enough people to play a full pickup game. With this application, it would be much easier for him
                to play some basketball whenever he wants.
            </text>
            <br />
            <img alt="ball" src="https://cdn.vectorstock.com/i/500p/79/05/basketball-vector-18437905.jpg" class="rounded-circle" width="200" />
            <br />
        </main>
    );
}