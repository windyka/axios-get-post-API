import React, { Component } from 'react';
import '../../src/TableBook.css'

class BookLists extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>ID Buku</th>
                    <th>Judul</th>
                    <th>ID Pengarang</th>
                    <th>Tgl Dibuat</th>
                    <th>Tgl Update</th>
                </tr>
                {this.props.datab.map((value, index) => {
                    return <tr>
                        <td>{value.id}</td>
                        <td>{value.judul}</td>
                        <td>{value.id_author}</td>
                        <td>{value.created_at}</td>
                        <td>{value.updated_at}</td>
                    </tr>
                })}
            </table>
        );
    }
}

export default BookLists;