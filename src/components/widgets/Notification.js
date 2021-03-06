import React from 'react';

const Notification = (props) => {
    return (
        <div className="alert alert-danger fade in alert-dismissible">
            <strong>{props.error}</strong>
        </div>
    )
}



export default Notification;