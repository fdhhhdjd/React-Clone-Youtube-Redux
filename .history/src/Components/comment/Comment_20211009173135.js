import React from "react";
import moment from "moment";
import "./_comment.scss";
const Comment = () => {
  return (
    <div className="p-2 comment d-flex">
      <img
        src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=270aa91b555a1f3b6c7494579f878ca0&oe=6188A4B1"
        alt=""
        className="mr-3 rounded-circle"
      />
      <div className="comment__body">
        <p className="mb-1 comment__header">1• {moment(1000).fromNow()}</p>
        <p className="mb-0">qua hay </p>
      </div>
    </div>
  );
};

export default Comment;
