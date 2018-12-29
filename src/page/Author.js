import React, { Component } from 'react'
import Axios from 'axios';
import AuthorLists from '../components/AuthorList';
import { Card } from 'reactstrap'
import '../../src/TableBook.css'

class Authors extends Component {

    state = {
        databAuth: []
    }

    getDataAuthorFromAPI = () => {
        Axios
            .get('https://api-demo.koding.sch.id/api/author')
            .then((res) => {
                console.log(res.data.data)
                this.setState({
                    databAuth: res.data.data
                })
                console.log(this.state.databAuth, ">>>>Databb")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    componentDidMount() {
        this.getDataAuthorFromAPI()
    }

    render() {

        const { databAuth } = this.state

        return (
            <div>
                <center>
                    <Card>
                        <h1>Author</h1>
                        <AuthorLists databAuth={databAuth} />
                    </Card>
                </center>

            </div>
        )
    }
}

export default Authors