import React, { Component } from 'react'

export default class ParentCC extends Component {
  render() {
    return (
      <div>
        <h3>Welcome at ParentCC as Class Componets</h3>
        <SubCCDemo/>
      </div>
    );
  }
}

class SubCCDemo extends Component{
    render(){
        return(
            <div>
                <h3>Welcome at subCCDemo as Class Componets</h3>
            </div>
        );
    }
}
