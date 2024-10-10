import React, { Component } from 'react'

export default class StateCC extends Component {
      constructor(props){
        super(props);
        this.state = {
            stdName:"Ram Kumar",
            stdAge: 23,
            stdBranch: "EXTC",
            stdMail:'Ram@gmail.com'
        };
      }

      changeTheState = () => {
        this.setState({
            stdBranch: "CSBS",
            stdMail: "ramkumar@gmail.com"
        });
      }
 
    render() {
    return (
      <div>
        <p>Student Name : {this.state.stdName}</p>
        <p>Student Age : {this.state.stdAge}</p>
        <p>Branch : {this.state.stdBranch}</p>
        <p>Mail ID : {this.state.stdMail}</p>
        <button onClick={this.changeTheState}>Change State</button>
      </div>
    )
  }
}
