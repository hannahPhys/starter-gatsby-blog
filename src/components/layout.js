import React from 'react'
import './base.scss'
import Container from './container'
import Nav from './navigation'
import Footer from './footer'

class Template extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Container>
        <Nav />
        {children}
        <Footer />
      </Container>
    )
  }
}

export default Template
