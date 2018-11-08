import React from 'react';

export const Button = (props) => 
    (
        <button onClick={props.onClick} className={'My-button'}>
            {props.children}
        </button>
    ) 