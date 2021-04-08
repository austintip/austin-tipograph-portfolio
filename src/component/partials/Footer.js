import github from '../../github.png'
import linkedin from '../../linkedin.png'

const Footer = () => {
    return(
    <footer className="footer">
        <h4>
                <a href="https://www.linkedin.com/in/austin-tipograph-522209137/" target="_blank"><img className="socialsLinks" src={linkedin}/></a>
                <a href="https://github.com/austintip" target="_blank"><img className="socialsLinks" src={github}/></a>
                </h4>
    </footer>
    )
}

export default Footer;