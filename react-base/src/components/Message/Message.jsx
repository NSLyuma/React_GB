import React from "react";
import style from "./Message.module.sass";

export const Message = ({ messageList }) => {
  return (
    <div className={style.message}>
      {messageList.map(({ author, text }, index) => {
        return (
          <div
            className={
              author === "User" ? style.message_user : style.message_bot
            }
            key={index}
          >
            {author}: {text}
          </div>
        );
      })}
    </div>
  );
};
