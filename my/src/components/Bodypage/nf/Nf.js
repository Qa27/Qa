import "./nf.css"
import PhotoIcon from '@mui/icons-material/Photo';
import TagIcon from '@mui/icons-material/Tag';
import Nf2 from "../nf2/Nf2";

export default function Nf() {
  return (
    <div className="newfeed">
      <div className="share">
        <div className="shareWrapper">
          <div className="shareTop">
            <img className="shareProfileImg" src="favicon.ico" alt="" />
            <input
              placeholder="Alo"
              className="shareInput"
            />
          </div>
          <hr className="shareHr"/>
          <div className="shareBottom">
          <div className="shareOptions">
                <div className="shareOption">
                    <PhotoIcon htmlColor="tomato" className="shareIcon"/>
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <TagIcon htmlColor="blue" className="shareIcon"/>
                    <span className="shareOptionText">Tag</span>
                </div>
                </div>
                <button className="shareButton">Share</button>
            </div>
          </div>
        </div>
        <Nf2/>
        </div>
    );
  }