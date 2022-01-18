import React, { Component } from 'react'
import BookService from '../services/BookService'

class ViewBookComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            book: {}
        }
    }

    componentDidMount(){
        BookService.getBookById(this.state.id).then( res => {
            this.setState({book: res.data});
        })
    }

    cancel(){
        this.props.history.push('/books');
    }
    render() {
        return (
            <div>
                
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Book Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> Title: </label>
                            <div> { this.state.book.title }</div>
                        </div>
                        <div className = "row">
                            <label> Author: </label>
                            <div> { this.state.book.author }</div>
                        </div>
			 <div className = "row">
                            <label> ISBN: </label>
                            <div> { this.state.book.isbn }</div>
                        </div>
                        <div className = "row">
                            <label> Language: </label>
                            <div> { this.state.book.language }</div>
                        </div>
                        <div className = "row">
                            <label> Price: </label>
                            <div> { this.state.book.price }</div>
                        </div>
		       <div className = "row">
                            <label> Count: </label>
                            <div> { this.state.book.count }</div>
                        </div>

                    </div>
                </div>
 		<div className = "col">
                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "45%", alignItems: "center"}}> Back </button>
		</div>

            </div>
	
        )
    }
}

export default ViewBookComponent
