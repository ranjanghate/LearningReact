import React, { Component } from "react"

const UpdatedComponent = (OriginalComponent, incrementCount) => {

  class NewComponent extends React.Component {

    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    incrementCount = () => {
      this.setState(prevState => {
        return { count: prevState.count + incrementCount }
      })
    }

    render() {
      return <OriginalComponent count={this.state.count} incrementCount={this.incrementCount}  {...this.props} />
      // When you the prop to component they are passed to HOC and not to component. To fix this issue you to pass the props from HOC to component using spread operator.
      // {...this.props will pass all the props from HOC to component}
    }
  }

  return NewComponent
}

export default UpdatedComponent
