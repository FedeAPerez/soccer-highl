import React from "react";

const getMessageHtml = element => {
  return { __html: element };
};

const Emoji = ({ children }) => (
  <span dangerouslySetInnerHTML={getMessageHtml(`&#x${children}`)} />
);

export { getMessageHtml, Emoji };
