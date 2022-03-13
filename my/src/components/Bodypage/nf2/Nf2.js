import "./nf2.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';

export default function nf2(){
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src='favicon.ico'
              alt=""
            />
            <span className="postUsername">
            </span>
            <span className="postDate">dsdsgs</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText"></span>
          <img className="postImg" src="favicon.ico" alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
          <ThumbUpIcon/>
          <ThumbDownAltIcon/>
            <span className="postLikeCounter"> people like it</span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">0 comments</span>
          </div>
        </div>
      </div>
    </div>
  )
}
