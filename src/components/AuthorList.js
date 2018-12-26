import React, { Component } from 'react';

class AuthorLists extends Component {
    render() {
        return (
            <table>
                <tr>
                    <th>ID Pengarang</th>
                    <th>Nama Pengarang</th>
                    <th>Dibuat</th>
                    <th>Update</th>
                </tr>
                {this.props.databAuth.map((value, index) => {
                    return <tr>
                        <td>{value.id}</td>
                        <td>{value.name}</td>
                        <td>{value.created_at}</td>
                        <td>{value.updated_at}</td>
                    </tr>
                })}

            </table>
        );
    }
}

export default AuthorLists;

// id: 1, name: "Dr. Erwandi", created_at: "2018-12-21 10:48:20", updated_at: "2018-12-21 10:48:20"