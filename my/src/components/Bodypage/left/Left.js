import "./left.css";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import GroupsIcon from '@mui/icons-material/Groups';

export default function left() {
  return (
    <div className="left">
      <div className="leftlayout">
        <ul className="list">
          <li className="listitem">
            <RssFeedIcon className="listicon" />
            <span className="listtext">Feed</span>
          </li>
          <li className="listitem">
            <ChatBubbleIcon className="listicon" />
            <span className="listtext">Chat</span>
          </li>
          <li className="listitem">
            <GroupsIcon className="listicon" />
            <span className="listtext">Groups</span>
          </li>
        </ul>
        <hr className="hr"/>
        <ul className="frlist">
          <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
            <li className="fr">
            <img className="frimg" src="favicon.ico" alt=""/>
            <span className="frname">Qa</span></li>
          </ul>
      </div>
    </div>
  );
}
