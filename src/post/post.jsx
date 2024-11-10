import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './post.css';

export function Post() {
    const navigate = useNavigate();
  
    const handleClick = () => {
      navigate('/');
    };

    return (
        <main>
            <h2>Create Game</h2>
            <br />
            <div class="form-group">
                <label for="address">Location:</label>
                <input type="text" class="form-control" id="address" placeholder="address of game"/>
            </div>
            <div class="form-group">
                <label for="date">Date:</label>
                <input type="date" class="form-control" id="date"/>
            </div>
            <div class="form-group">
                <label for="time">Time:</label>
                <input type="time" class="form-control" id="time"/>
            </div>
            <div class="form-group">
                <label for="sel1">Public or Private:</label>
                <select class="form-control" id="sel1">
                    <option disabled selected>Select an option</option>
                    <option>Public</option>
                    <option>Private</option>
                </select>
            </div>
            <br />
            <Button variant='primary' onClick={handleClick}>Create</Button>
            <br />
        </main>
    );
}