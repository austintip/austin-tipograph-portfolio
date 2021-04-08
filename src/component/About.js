const About = (props) => {
    return (
        <div className="aboutMeContainer">
            <h1 className="page-header">Hi, I'm Austin!</h1>
            <div className="picLinkHolder">
                <img className="austinPic" src={props.austinPic} alt="Image of Austin"/>
            </div>
            <div className="aboutMeBox">
                <h2 className="aboutMe">
                    I am a developer with an artistically logical mind. My background in musical theater allows for creative problem solving and an upbeat attitude. I am a team-player with a passion for helping others and overcoming challenges. My experience in a range of fields allows for adaptability and quick adjustments. </h2>
            </div>
        </div>
    )
}

export default About