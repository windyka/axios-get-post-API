import React, { Component } from 'react';
import Axios from 'axios';
import BookEdits from '../components/BookEdit';
import { Card } from 'reactstrap';

class BookPuts extends Component {
  state = {
    book: [],
    judul: '',
    id: 73
  };

  getDataBookFromAPI = () => {
    Axios.get('https://api-demo.koding.sch.id/api/book')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          book: res.data.data
        });
        console.log(this.state.book, '>>>> Datab');
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDataBookFromAPI();
  }

  putDataBookFromAPI = () => {
    Axios.put(`https://api-demo.koding.sch.id/api/book/${this.state.id}`, {
      id: this.state.id,
      judul: this.state.judul
    })
      .then(res => {
        alert('Berhasil diedit');
      })
      .catch(() => {
        alert('Gagal Ditambahkan');
      });
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    console.log(this.state.judul);
    console.log(this.state.id);
    return (
      <div>
        <center>
          <h1>Edit Judul</h1>
          <Card
            style={{
              width: 350,
              height: 150,
              borderRadius: 15,
              padding: 20,
              border: '1px solid grey'
            }}>
            <BookEdits
              editBook={this.putDataBookFromAPI}
              state={this.state}
              judul={this.state.judul}
              handleChange={this.handleChange}
              id={this.state.id}
              book={this.state.book}
            />
          </Card>
        </center>
      </div>
    );
  }
}

export default BookPuts;
