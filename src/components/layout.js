import React from 'react'
import './base.scss'
import Container from './container'
import Nav from './navigation'

class Template extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Container>
        <Nav />
        {children}
      </Container>
    )
  }
}

export default Template
