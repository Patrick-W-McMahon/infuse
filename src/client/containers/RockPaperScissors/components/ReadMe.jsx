import React from 'react';
import PropTypes from 'prop-types';
//import Markdown from 'react-markdown';//This is not working may need to find a different plugin.

class ReadMe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        const { src, onClose } = this.props;
        return (
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Read Me documents</h5>
                        <button type="button" className="close" onClick={() => onClose()}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        {/*<Markdown source={src} />*/}
                    </div>
                </div>
            </div>
        );
    }
}

ReadMe.propTypes = {
    src: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default ReadMe;