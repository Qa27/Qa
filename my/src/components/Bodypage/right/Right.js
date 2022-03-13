import "./right.css";

export default function Right() {
  return (
    <div className="friends">
      <img className="rightbarAd" src="assets/ad.png" alt="" />
      <h4 className="rightbarTitle">Online Friends</h4>
      <ul className="rightbarFriendList">
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="favicon.ico" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Qa</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="favicon.ico" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Qa</span>
        </li>
        <li className="rightbarFriend">
          <div className="rightbarProfileImgContainer">
            <img className="rightbarProfileImg" src="favicon.ico" alt="" />
            <span className="rightbarOnline"></span>
          </div>
          <span className="rightbarUsername">Qa</span>
        </li>
      </ul>
    </div>
  );
}
