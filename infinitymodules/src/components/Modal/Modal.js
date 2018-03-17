import React from 'react';
import PropTypes from 'prop-types';
import css from './Modal.css';

const Modal = ({ onClose, isOpen = false, children}) =>  {
    if (isOpen) {
        return (
            <div className={css.window}>
                {children}
                <button className={css.btn} onClick={onClose}> Close </button>
            </div>
        );
    }
    return null;
};
// Studdist við þetta
// https://piazza.com/class/jbzjs3mbfgb4oq?cid=300
Modal.Title = ({children}) => {
    return <div className={css.title}>{children}</div>
}

Modal.Body = ({children}) => {
    return <div className={css.body}>{children}</div>
}

Modal.Footer = ({children}) => {
    return <div className={css.footer}>{children}</div>
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
    children: PropTypes.node
};

export default Modal;
