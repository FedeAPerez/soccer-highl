import React from "react";

const getMessageHtml = element => {
  return { __html: element };
};

const Emoji = ({ children }) => (
  <span dangerouslySetInnerHTML={getMessageHtml(children)} />
);

export { getMessageHtml, Emoji };
