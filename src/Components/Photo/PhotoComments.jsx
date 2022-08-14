import React from "react";

import style from "./PhotoComments.module.css";

import { UserContext } from "../../Context/UserContext";
import PhotoCommentsForm from "./PhotoCommentsForm";

const PhotoComments = ({ id, commentPhoto, single }) => {
  const [comments, setComments] = React.useState(() => commentPhoto);
  const commentsSection = React.useRef(null);
  const { login } = React.useContext(UserContext);

  React.useEffect(() => {
    commentsSection.current.scrollTop = commentsSection.current.scrollHeight;
  }, [comments]);

  return (
    <>
      <ul
        ref={commentsSection}
        className={`${style.comments} ${single ? style.single : ""}`}
      >
        {comments.map((comment) => (
          <li key={comment.comment_ID}>
            <b>{comment.comment_author}: </b>
            <span>{comment.comment_content}</span>
          </li>
        ))}
      </ul>
      {login && (
        <PhotoCommentsForm single={single} id={id} setComments={setComments} />
      )}
    </>
  );
};

export default PhotoComments;
