import "./navbar.css"
import { Search, Person, Chat, Notifications } from "@material-ui/icons"

function Navbar() {
    return (
        <div className="navbarContainer">
            <div className="navbarLeft">
                <span className="logo">Do TanRet</span>
            </div>
            <div className="navbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search for friend, post or video" className="searchInput"/>
                </div>
            </div>
            <div className="navbarRight">
                <div className="navbarLinks">
                    <span className="navbarLink">Homepage</span>
                    <span className="navbarLink">Timeline</span>
                </div>
                <div className="navbarIcons">
                    <div className="navbarIconItem">
                      <Person />
                      <span className="navbarIconBadge">1</span>
                   </div>
                <div className="navbarIconItem">
                    <Chat />
                    <span className="navbarIconBadge">2</span>
                </div>
                    <div className="navbarIconItem">
                       <Notifications />
                      <span className="navbarIconBadge">1</span>
                   </div>
                </div>
                <img src="/assets/person/1.jpeg" alt="" className="navbarImage"/>
            </div>
        </div>
    )
}

export default Navbar
