import React from 'react';

const BookEdits = (props) => {
    return (
        <div>
            Edit Judul: {''} <input type="text" value={props.state.judul} name="judul" onChange={props.handleChange} /> <br />
            Sebelumnya : {''}
            <select value={props.state.id} name="id" onChange={props.handleChange}>
                {props.book.map((value, index) => {
                    return <option value={value.id}>{value.judul}</option>
                })}
            </select> <br />
            <button onClick={() => props.editBook()}>Send</button>
        </div>
    );
};

export default BookEdits; 