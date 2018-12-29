import React from 'react'

const BookForms = (props) => {
    return (
        <div>
            Judul : {''} <input type="text" name="judul" value={props.state.judul} onChange={props.handleChange} /> <br />
            author : {''}
            <select value={props.state.id_auth} name="id_auth" id="" onChange={props.handleChange}>
                {props.author.map((value, index) => {
                    return <option value={value.id}>{value.name}</option>
                })}
            </select><br />
            <button onClick={() => props.postBook()}>Send</button>
        </div>
    )
}

export default BookForms

// state = {
//     author: [],
//     judul: "",
//     id_auth: 2,
// }