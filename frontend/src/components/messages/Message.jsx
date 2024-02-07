import React from "react";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src="./img1.png" alt="Tailwind CSS Chat Bubble Component" />
        </div>
      </div>
      <div className={`chat-bubble text-white bg-blue-500`}>
        Hey What is Upp ??
      </div>
      <div className={`chat-footer opacity-50 text-xs flex gap-1 items-center`}>
        24.25
      </div>
    </div>
  );
};

export default Message;
