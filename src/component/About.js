import React from 'react'

const About = (props) => {
    return (
        <div>
            <h1>Hi I'm Austin!</h1>
            <p>
                I am a developer with an artistically logical mind. My background in musical theater allows for creative problem solving and an upbeat attitude. I am a team-player with a passion for helping others and overcoming challenges. My experience in a range of fields allow for adaptability and quick adjustments. </p>
            <h3>Find me here:</h3>
            <h4>
                <a href="https://www.linkedin.com/in/austin-tipograph-522209137/" target="_blank">LinkedIn</a> <br></br>
                <a href="https://github.com/austintip" target="_blank">GitHub</a><br></br>
                Email: austin.d.tipograph@gmail.com
                </h4>
            <div className="picLinkHolder">
                <img className="austinPic" src={props.austinPic} />
            </div>
        </div>
    )
}

export default About