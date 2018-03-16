import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.css';

const Modal = ({ onClose, isOpen = false, children}) =>  {
    if (isOpen) {
        return (
            <div className={css.title}>
                <button onClick={onClose}> Close </button>
                {children}
            </div>
        );
    }
    return null;
};
// Studdist við þetta
// https://piazza.com/class/jbzjs3mbfgb4oq?cid=300
Modal.Title = ({children}) => {
    return <div>{children}</div>
}

Modal.Body = ({children}) => {
    return <div>{children}</div>
}

Modal.Footer = ({children}) => {
    return <div>{children}</div>
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node
};

export default Modal;
