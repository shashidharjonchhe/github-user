import React from 'react';

const Errors = ({error}) => {
    return (
        <ul className="errors">
            {
                error.map((e,i) => <li key={i}>{e.message}</li>)
            }
        </ul>
    )
}

export default Errors;