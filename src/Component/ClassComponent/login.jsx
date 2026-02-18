import React from "react";

export class UserLogin extends React.Component
{
constructor(){
    super();
    this.state = {
        title: 'User Login',
        categories: ['All','Fashion','Electronics']
    }
}
componentDidMount(){
    this.setState({title: 'Customer Login'});
}
render(){
    return(
        <div className="container mt-3">
            <h2>{this.state.title}</h2>
            <ol>

                {

                this.state.categories.map(category=><li key=
                {category}>{category}</li>)

                }
            </ol>
        </div>
        )
    }
}