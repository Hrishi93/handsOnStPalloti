import React, { Component } from 'react'

export default class DemoPropsCC extends Component {
  render(props) {
    return (
      <div>
        {this.props.teacherName}
        {this.props.subject}
      </div>
    )
  }
}
