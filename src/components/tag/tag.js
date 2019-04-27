import React from "react";
import { string, oneOf } from "prop-types";
import classNames from "classnames";
import "./tag.scss";

const namespace = "fut-tag";

const modifier = {
  red: "red",
  green: "green"
};

const Tag = ({ children, className, modifier }) => (
  <span
    className={classNames(namespace, className, `${namespace}--${modifier}`)}
  >
    {children}
  </span>
);

Tag.propTypes = {
  className: string,
  modifier: oneOf(modifier)
};

Tag.defaultProps = {
  modifier: modifier.red
};

export { modifier as TagModifier };
export default Tag;
