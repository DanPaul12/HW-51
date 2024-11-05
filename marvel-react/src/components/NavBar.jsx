import { Link, NavLink } from "react-router-dom"
import CharacterList from "./CharacterList"


const NavBar = () => {
    return(
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/characters'>Character List</Link>
            <Link to='/comics'>Comics</Link>
        </nav>
    )
}

export default NavBar