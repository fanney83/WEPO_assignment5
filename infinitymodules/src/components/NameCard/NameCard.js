import React from 'react';
import css from './NameCard.css';

const NameCard = ({ name, email, telephone, imageUrl }) => {
    return (
        <div className={`${css.card}`}>
            <div className="info">
                <div style={{ backgroundImage: `url(${imageUrl})` }} className={`${css.imageUrl}`}></div>
                <div className={`${css.name}`} > {name}</div>
                <div className={`${css.email}`}> {email}</div>
                <div className={`${css.telephone}`}> {telephone}</div>
            </div>
        </div>
    );
};

export default NameCard;
