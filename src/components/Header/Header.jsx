import LeftMenu from "./Left-menu"
import SearchBar from "./SearchBar"
import './Header-CSS/Header.css'

function Header() {
    return (
        <header className="header">

            <LeftMenu />

            <SearchBar />

        </header>
    )
}

export default Header