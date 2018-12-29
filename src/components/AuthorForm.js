import React from 'react';

const AuthorForms = (props) => {
    return (
        <div>
            Nama : {''}<input type="text" name="" value={props.state.name} onChange={props.handleChange} /> <br />
            <button onClick={() => props.postAuth()} >Send</button>
        </div>
    );
};

export default AuthorForms;
