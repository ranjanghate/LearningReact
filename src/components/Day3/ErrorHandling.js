import React, { Component } from 'react'
import Error from './Error'
import ErrorBoundary from './ErrorBoundary'
export default class ErrorHandling extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Error heroname={'batman'} />
        </ ErrorBoundary>

        <ErrorBoundary>
          <Error heroname={'superman'} />
        </ErrorBoundary>

        <ErrorBoundary>
          <Error heroname={'joker'} />
        </ErrorBoundary>
      </div>
    )
  }
}
