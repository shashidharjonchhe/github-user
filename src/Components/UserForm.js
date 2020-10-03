
import React, { useState } from 'react';

const UserForm = (props) => {
    const { onSearch } = props;
    const [query, setQuery] = useState('');
    return (
        <div className="github-user-form">
            <h6>Search For any user</h6>
            <input className="input-control" type="text" onChange={(e => setQuery(e.target.value))} />
            <button className="submit-btn" onClick={() => onSearch(query)}>Submit</button>
        </div >
    )
};

export default UserForm;