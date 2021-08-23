import "./closefriend.css";

function CloseFriend({user}) {
    return (
        <li className="sidebarFriend">
            <img className="sidebarFriendImage" src={user.profilePicture} alt=""/>
            <span className="sidebarFriendName">{user.username}</span>
       </li>
    )
}

export default CloseFriend
