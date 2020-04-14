// look at the likes on this component. Right now it is hard coded on line 20.
// console.log your props and see how to add likes to this component so that it will update when you click the icon.
// HINT: You will need to add an onClick event pass through your props and update the hard coded Likes
import React, {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faKissWinkHeart } from '@fortawesome/free-regular-svg-icons'

let clicked = 0
let icon = faHeart

const LikeSection = props => {

  const [like, setLike] = useState(props.props)  

  const clickHandler = event =>{
    if(clicked){
      clicked = 0
      setLike(like-1)
      icon = faHeart
    }else{
      clicked = 1
      setLike(like+1)
      icon = faKissWinkHeart
    }
  }

  return (
    <div>
      <div
        className="like-section"
        key="likes-icons-container"
      >
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={icon} onClick={clickHandler}/>
        </div>
        <div className="like-section-wrapper">
          <FontAwesomeIcon icon={faComment} />
        </div>
      </div>
      <p className="like-number">{like} likes</p>
    </div>
  )
};

export default LikeSection;
