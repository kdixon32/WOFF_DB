import React, { Component } from 'react';
export default class Description extends Component {
    render() {
        return (
            <div className="Demo">
                <h3>Things to note:</h3>
                <li>The monsters of World of Final Fantasy are called "Mirages", and the teams that they make up are called "stacks".</li>
                <li>Stacks are made up of one of each size mirage including small, medium, and large.</li>
                <li>There are four tiers of normal magic in World of Final Fantasy, with the tiers labeled by the ending of the spell. To unlock the next tier of magic, we need to accumulate a certain amount of points in that element.
                    <ol className="inner-list">
                        <li>Tier 1 = Fire (1 Magic Point)</li>
                        <li>Tier 2 = Fira (2 Magic Points)</li>
                        <li>Tier 3 = Firaga (4 Magic Points)</li>
                        <li>Tier 4 = Firaja (8 Magic Points)</li>
                    </ol>
                </li>
                <li>Ultimate spells like "Flare" have unique requirements. In this case, needing 2 tier 3 spells of any element.</li><br></br><br></br>
                <div>Our goal for this demo is to build two stacks:</div>
                <li>
                    A stack with the spells "Blizzaja" and "Flare".
                </li>
                <li>
                    A stack that has "Thundaja" and can maximize the power of the spell "Blossom Storm".
                </li>
                <div>Starting with the Blizzaja/Flare stack: We need to find 1 mirage of small, medium, and large variety that can give us the spells we want.</div>
                <div className="image">
                    <img src="https://cdn.discordapp.com/attachments/699881102541586494/965803163171033088/unknown.png" width="900" height="400" alt=""></img>
                    <img src="https://cdn.discordapp.com/attachments/699881102541586494/965802978336460850/unknown.png" width="900" height="400" alt=""></img>
                    <img src="https://cdn.discordapp.com/attachments/699881102541586494/965802787873124352/unknown.png" width="900" height="400" alt=""></img>
                </div>
                <div class="image">Here we've found a combination of Quacho Queen(L), Flan Princess(M), and Bablizz(S) to give us the spells that we want.</div><br></br>
                <div class="image">A example stack to meet the second goal may look something like the following, which uses the the magic growth rating and mirages with high level thunder magic.</div>
                <img src="https://cdn.discordapp.com/attachments/699881102541586494/965807892659838986/unknown.png" width="900" height="400" class="image" alt=""></img><br></br>
                <div className="image">
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/JyM3z0beFdw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/-3Zu8mj3Rxg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/x27tr98NuQ8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <iframe width="900" height="400" src="https://www.youtube.com/embed/7FNgff5jC3Y" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

                </div>
                <div class="center">Congratulations! You've created your dream team!</div>
            </div>
        )
    }
}