import React from 'react';
import './menuitem.style.scss';

const MenuItem = (props) => {
    return (
        <div className={`${props.size} menu-item`}>
            <div style={{
            backgroundImage:`url(${props.imageUrl})`
                }}  className="background-image"/>
                <div className="content">
                <h1 className="title">{props.title.toUpperCase()}</h1>
                <span className="subtitle">SHOP NOW</span>
                </div>
            
        </div>
    )
}

export default MenuItem
