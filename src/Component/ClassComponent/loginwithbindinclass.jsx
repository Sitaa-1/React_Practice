import React from "react";

export class UserLogin2 extends React.Component
{
    constructor(){
        super();
        this.state = { msg: ''}
        this.handleInsertClick = this.handleInsertClick.bind(this);
    }

    handleInsertClick(){
        this.setState({msg: 'Record Inserted'});
    }

    render(){
        return(
            <div className="container mt-3">
                <h2>Class Component</h2>
                <button onClick={this.handleInsertClick}>Insert</button>
                <p>{this.state.msg}</p>
            </div>
        )
    }
}