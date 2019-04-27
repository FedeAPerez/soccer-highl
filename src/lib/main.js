import React from "react";

const getMessageHtml = element => {
  return { __html: element };
};

const Emoji = ({ children }) => (
  <span dangerouslySetInnerHTML={getMessageHtml(`&#x${children}`)} />
);

const GetEmoji = ({ id }) => {
  switch (id) {
    case "fire":
      return <Emoji>1F525</Emoji>;
    case "soccer":
      return <Emoji>26BD</Emoji>;
  }
};

export { getMessageHtml, GetEmoji };
