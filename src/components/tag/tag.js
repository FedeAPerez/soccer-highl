import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./tag.scss";

const namespace = "fut-tag";

const modifier = {
  red: "red",
  green: "green"
};

const Tag = ({ children, modifier }) => (
  <span className={classNames(namespace, `${namespace}--${modifier}`)}>
    {children}
  </span>
);

Tag.propTypes = {
  modifier: PropTypes.oneOf(modifier)
};

Tag.defaultProps = {
  modifier: modifier.red
};

export { modifier };
export default Tag;
