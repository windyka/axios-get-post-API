import React, { Component } from 'react';
import Axios from 'axios';

import { Card } from 'reactstrap'
import BookForms from '../components/BookForm';

class BookPosts extends Component {

    state = {
        author: [],
        judul: "",
        id_auth: 2,
    }

    getDataAuthorFromAPI = () => {
        Axios
            .get('https://api-demo.koding.sch.id/api/author')
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    author: res.data.data,
                })
                console.log(this.state.author, '>>>> Database')
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getDataAuthorFromAPI()
    }

    postDataBookToAPI = () => {
        Axios
            .post('https://api-demo.koding.sch.id/api/book', {
                judul: this.state.judul,
                id_author: this.state.id_auth
            })
            .then(() => {
                alert("Data Berhasil Ditambahkan")
            })
            .catch(() => {
                alert("Data Gagal Ditambahkan")
            })
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    // changeIdAuth = (e) => {
    //     this.setState({
    //         id_auth: e.target.value
    //     })
    // }


    render() {
        console.log(this.state.judul)
        console.log(this.state.id_auth)
        return (

            <div>
                <center>
                    <h1>Tambah Buku</h1>
                    <Card style={{ width: 350, height: 150, borderRadius: 15, padding: 20, border: "1px solid grey" }}>
                        <BookForms postBook={this.postDataBookToAPI} state={this.state} handleChange={this.handleChange} author={this.state.author} />
                    </Card>
                </center>
            </div>
        );
    }
}

export default BookPosts;