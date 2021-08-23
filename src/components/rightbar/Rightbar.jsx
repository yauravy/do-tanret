import "./rightbar.css";
import { Users } from "../../dummyData"
import Online from "../../components/online/Online"

function Rightbar({profile}) {
    const HomeRightbar =() => {
        return(
            <>
                <div className="birthdayContainer">
                    <img className="birthdayImg" src="assets/gift.png" alt=""/>
                    <span className="birthdayText">
                    <b>Ottoh Vaskhen</b> and <b>3 other friends</b> have a birhday today.
                    </span>
                </div>
                <img className="rightbarAd" src="assets/ad.png" alt="" />
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    {Users.map(u=>(
                        <Online key={u.id} user={u} />
                    ))}
                </ul>
            </>
        );
    };

    const ProfileRightbar = () => {
        return (
            <>
            <h4 className="rightbarTitle">User Info</h4>
            <div className="rightbarInfo">
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">City:</span>
                    <span className="rightbarInfoValue">Bi Igura</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Tamazirt:</span>
                    <span className="rightbarInfoValue">Bi Igura</span>
                </div>
                <div className="rightbarInfoItem">
                    <span className="rightbarInfoKey">Relationship:</span>
                    <span className="rightbarInfoValue">evergreen</span>
                </div>
            </div>
            <h4 className="rightbarTitle">User friens</h4>
            <div className="rightbarFollowings">
                <div className="rightbarFollowing">
                    <img src="assets/person/5.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Ibba Yamna</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/3.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Ibba Yamna</span>
                </div>
                <div className="rightbarFollowing">
                    <img src="assets/person/6.jpeg" alt="" className="rightbarFollowingImg"/>
                    <span className="rightbarFollowingName">Ibba Yamna</span>
                </div>
            </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar/> : <HomeRightbar/>}
            </div>
        </div>
    )
}


export default Rightbar
