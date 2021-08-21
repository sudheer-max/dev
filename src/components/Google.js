import React from 'react';

const Google = ({ children, ...otherProps }) => {
    return (
        <button className="ree-btn  ree-btn-grdt1 w-100" {...otherProps}> {children}</button>
    )
}

export default Google;
