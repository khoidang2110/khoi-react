import React from "react";

import Avatar from "./Comment/Avatar";
import Text from "./Comment/Text";
import UserInfo from "./Comment/UserInfo";
import DateTime from "./Comment/DateTime";
function Comment() {
  const comment = {
    date: new Date(),

    text: "I hope you enjoy learning React!",

    author: {
      name: "Hello Kitty",

      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

  return (
    <div>
      <Avatar imgLink={comment.author.avatarUrl} />
      {/* <UserInfo name={comment.author.name} /> */}
      <Text text={comment.author.name}/>
      <Text text={comment.text} />
      <Text text={comment.date.toLocaleDateString()}/>
     {/* <DateTime date={comment.date.toLocaleDateString()} /> */}
    </div>
  );
}
// get date format " mm/dd/yyyy"
export default Comment;
