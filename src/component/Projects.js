import React from 'react'


const Projects = (props) => {
    return (
        <div className="projectsContainer">
            <div className="projectSpot">
                <h1>DogSpot</h1>
                <a href="https://dogspot.herokuapp.com/" target="_blank">
                    <img className="projectPic" src={props.dogspot} />
                </a>
                <p>DogSpot is an app that allows users to look up dog breeds, click on a link to lear more about the dogs, and save them to a favorite "My Dogs" list. Check it out for yourself <a href="https://dogspot.herokuapp.com/" target="_blank">here!</a></p>
            </div>
            <div className="projectSpot">
                <h1>Pokémon Catch</h1>
                <a href="https://austintip.github.io/Pokemon-Catch/" target="_blank">
                    <img className="projectPic" src={props.pokemon_catch} />
                </a>
                <p>Pokémon Catch is a game developed using HTML JavaScript and CSS. It is built on a JavaScript Canvas and the aim of the game is to catch Pokémon without your Pokéball being stolen by the evil Team Rocket! Check it out for yourself <a href="https://austintip.github.io/Pokemon-Catch/" target="_blank">here!</a></p>
            </div>
        </div>
    )
}

export default Projects