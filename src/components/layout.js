import React from 'react'
import './base.scss'
import Container from './container'
import Nav from './navigation'
import Footer from './footer'
import ErrorBoundary from './error-boundary'
class Template extends React.Component {

  render() {
    const { children } = this.props

    return (
      <ErrorBoundary>
        <Container>
          <Nav />
          {children}
          <Footer />
        </Container>
      </ErrorBoundary>
    )
  }
}

export default Template
