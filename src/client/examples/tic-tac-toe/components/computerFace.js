import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const ComputerFace = ({ face, size }) => (
    <React.Fragment>
        <h6>Computer Player</h6>
        <Icon className="computerFace" icon={face || 'meh'} size={size || 10} />
    </React.Fragment>
);

ComputerFace.defaultProps = { face: 'meh' };

ComputerFace.propTypes = {
    face: PropTypes.string,
    size: PropTypes.number
};

export default ComputerFace;