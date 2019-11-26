import React from 'react';
import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>Here is a paragraph.</p>
            <p>Hello, {props.username}</p>
        </div>
    );
};

export default userOutput;
