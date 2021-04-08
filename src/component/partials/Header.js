import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className="App-header">
            <h1 className="header_name">Austin Tipograph</h1>
            <nav>
                <Link to="/contact">Contact Me!</Link>{' | '}
                <Link to="/">About Me!</Link>{' | '}
                <Link to="/projects">My Projects</Link>
            </nav>
        </header>
    )
}

export default Header