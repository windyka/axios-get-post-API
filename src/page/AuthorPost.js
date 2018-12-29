import React, { Component } from 'react';
import Axios from 'axios'
import AuthorForms from '../components/AuthorForm';
import { Card, Row } from 'reactstrap'

class AuthorPosts extends Component {

    state = {
        name: ""
    }

    postDataAuthorFromAPI = () => {
        Axios
            .post('https://api-demo.koding.sch.id/api/author', {
                name: this.state.name
            })
            .then(() => {
                alert('Berhasil ditambahkan!')
            })
            .catch(() => {
                alert('Gagal')
            })
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    render() {
        console.log(this.state.name)
        return (
            <div>
                <center>
                    <Row>
                        <h1>Tambah Pengarang</h1>
                        <Card style={{ width: 250, height: 150, borderRadius: 15, padding: 20, border: "1px solid grey" }}>
                            <AuthorForms postAuth={this.postDataAuthorFromAPI} state={this.state} handleChange={this.handleChange} name={this.state.name} />
                        </Card>
                    </Row>
                </center>
            </div>
        );
    }
}

export default AuthorPosts;