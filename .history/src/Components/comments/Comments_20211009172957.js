import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./_comments.scss";
import Comment from "../../Components/comment/Comment";

const Comments = () => {
  return (
    <>
      <div className="comments">
        <p>50 Comments</p>
        <div className="my-2 comments__form d-flex w-100">
          <img
            src="https://scontent.fsgn2-2.fna.fbcdn.net/v/t1.6435-9/190801150_3047073538840591_1241117089856663372_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=zdyoRSbXNiUAX9Ns_Nd&_nc_ht=scontent.fsgn2-2.fna&oh=270aa91b555a1f3b6c7494579f878ca0&oe=6188A4B1"
            alt="avatar"
            className="mr-3 rounded-circle"
          />
          <form className="d-flex flex-grow-1">
            <input
              type="text"
              className="flex-grow-1"
              placeholder="Write a comment..."
            />
            <button className="p-2 border-0">Comment</button>
          </form>
        </div>
        <div className="comments__list">
          {[...Array(20).map(() => <Comment />)]}
        </div>
      </div>
    </>
  );
};

export default Comments;
