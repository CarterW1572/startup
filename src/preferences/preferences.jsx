import React from 'react';
import './preferences.css';

export function Preferences() {
    return (
        <main>
            <h2>Preferences</h2>
            <br />
            <div>
                Database data
                (will display user data such as username)
            </div>
            <br />
            <div class="form-group">
                <label for="sel1">View:</label>
                <select class="form-control" id="sel1">
                    <option disabled selected>Select view</option>
                    <option>All games</option>
                    <option>Friends only</option>
                </select>
            </div>
            <br />
            <button class="btn btn-primary">Apply</button>
            <br />
        </main>
    );
}