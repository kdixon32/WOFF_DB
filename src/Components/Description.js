import React, { Component } from 'react';

export default class Description extends Component {
    render() {
        return (
            <div className="Desc">
                <h4>Users of the Site:</h4>
                <div>The main users of this website are people who play the game "World of Final Fantasy".</div>
                <h4>Usage:</h4>
                <div>Users of the site have an easy way to quickly get information for monsters in the game.</div>
                <h4>Problem:</h4>
                <div>Although this information is technically already in the ingame encyclopedia, the player has to return to their room, a place where there are no monsters, to access it. With this website any player can access the information anywhere.</div>
                <h4>User Takeaway:</h4>
                <div>Users of this website should have a better understanding of the abilities available to each mirage and find mirages that may be better for their team.</div>
            </div>
        )
    }
}