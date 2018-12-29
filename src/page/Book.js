import React, { Component } from 'react';
import '../../src/TableBook.css';
import { Card } from 'reactstrap';

import Axios from 'axios';
import BookLists from '../components/BookList';

class Books extends Component {
  state = {
    datab: []
  };

  getDataBookFromAPI = () => {
    Axios.get('https://api-demo.koding.sch.id/api/book')
      .then(res => {
        console.log(res.data.data);
        this.setState({
          datab: res.data.data
        });
        console.log(this.state.datab, '>>>> Datab');
      })
      .catch(err => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.getDataBookFromAPI();
  }

  render() {
    const { datab } = this.state;

    return (
      <div>
        <center>
          <Card>
            <h1>Books</h1>
            <BookLists datab={datab} />
          </Card>
        </center>
      </div>
    );
  }
}

export default Books;
