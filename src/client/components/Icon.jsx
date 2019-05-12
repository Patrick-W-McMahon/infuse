import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, size, spin, className }) => <i className={`${className} fas fa-${icon} fa-${size || 10}x ${spin ? 'fa-spin' : ''}`}></i>;

Icon.defaultProps = {
    icon: 'cog',
    size: 5,
    span: false
 };

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    spin: PropTypes.bool
};

export default Icon;