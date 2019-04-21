import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import "./tag.scss";

const namespace = "fut-tag";

const Tag = ({ children, modifier }) => (
  <span className={classNames(namespace, `${namespace}--${modifier}`)}>{children}</span>
);

Tag.propTypes = {
    modifier : PropTypes.oneOf(['green', 'red'])
};

Tag.defaultProps = {
    modifier: 'red';
}

export default Tag;
