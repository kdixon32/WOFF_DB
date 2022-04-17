import React, { Component } from 'react';

export default class Home extends Component {
    render() {
        return (
            <div className="About">
                <h1>About Us</h1>
                <div className="me">Hello. I'm Kielan and I enjoy web projects and working with data.</div>
                <div className="Message">This project matches data in the search bar to the data saved in the database to give users a list of mirages that fit their search. I chose to do this project as this is something I've been planning to try for a while now as I love working with data and enjoy this particular game very much.</div>
                <div className="technology">The technology used to create this project inlcudes React and the Algolia database. I collected data from the game and inserted it into an excel file that was converted into an SQL script. Early testing of this project was done in SQL but ultimately I decided to try using the algolia API to complete the project, which required me to convert my SQL script to JSON. </div>
                <div className="Learned">From this class I've been able to practice my css and learn to integrate responsive design into my front-end web projects.</div>
            </div>
        )
    }
}