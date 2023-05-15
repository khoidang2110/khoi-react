import React from "react";

import Avatar from "./Avatar";
import Text from "./Text";
import UserInfo from "./UserInfo";
import DateTime from "./DateTime";
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
      <UserInfo name={comment.author.name} />
      <Text text={comment.text} />
      <DateTime date={comment.date.toLocaleDateString()} />
    </div>
  );
}

export default Comment;
