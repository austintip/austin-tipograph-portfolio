// import { Link } from 'react-router-dom'
import { Link, animatedScroll as scroll } from 'react-scroll'

const scrollToTop = () => {
    scroll.scrollToTop();
};

const Header = () => {
    return (
        <header className="App-header">
            <h1 className="header_name"
            onClick={scrollToTop}>Austin Tipograph</h1>
            <nav>
                <Link 
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                    Contact Me!
                </Link>{' | '}
                <Link 
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                    About Me!
                    </Link>{' | '}
                <Link 
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>
                    My Projects</Link>
            </nav>
        </header>
    )
}

export default Header