import { Link, NavLink } from "react-router-dom"
import CharacterList from "./CharacterList"


const NavBar = () => {
    return(
        <nav>
            <Link to='/characters'>Character List</Link>
        </nav>
    )
}

export default NavBar