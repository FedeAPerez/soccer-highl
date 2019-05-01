import React from "react";
import { string, oneOf } from "prop-types";
import classNames from "classnames";
import "./tag.scss";

const namespace = "fut-tag";

const Tag = ({ children, className, modifier }) => (
  <span
    className={classNames(namespace, className, `${namespace}--${modifier}`)}
  >
    {children}
  </span>
);

Tag.propTypes = {
  className: string,
  modifier: oneOf(["red", "green"])
};

Tag.defaultProps = {
  modifier: "red"
};

export default Tag;
