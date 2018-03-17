import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProgressBar.css';


const ProgressBar = ({progress, striped = false, animated = false, state}) => {

    const progressbar = {
        width: progress + '%',
    }
    var Striped = null;
    var Animated = null;

    if (striped) {
        Striped = styles.striped;
    }
    if(animated) {
        Animated = styles.animation
    }
    return (
        <div>
            <div className={`${styles.percentcount}`}>{progress}%</div>
            <div className={`${styles.progressbar}`}>
                <div className={`${styles.progress} ${styles[`progress-${state}`]} ${Striped} ${Animated}`} style={progressbar}   ></div>
            </div>
        </div>
    );
};

ProgressBar.propTypes = {
    progress: PropTypes.number,
    striped: PropTypes.bool.isRequired,
    animated: PropTypes.bool.isRequired,
    state: PropTypes.oneOf(['info', 'success', 'warning', 'danger']).isRequired, //litur (info=blár, success=grænn, warning=appelsínugulur, danger=rauður)
    children: PropTypes.node
};

export default ProgressBar;
<<<<<<< HEAD


/*return (
        <button className={`${styles.btn} ${styles[`btn-${type}`]}`} onClick={onClick}>{children}</button>
    );*/

    /*.btn {
    margin: 10px;
    padding: 10px;
    box-shadow: 5px 5px 2px rgba(155, 155, 155, .5);
    font-size: 16px;
    color: white;
}

.btn-success {
    background-color: green;
}

.btn-warning {
    background-color: orange;
}

.btn-danger {
    background-color: red;
}*/
=======
>>>>>>> f0cdd51832206783dd1aef74fdf7c35ba1dbd65e
