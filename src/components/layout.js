import React from 'react'
import './base.css'
import Container from './container'
import Sidebar from './sidebar'

class Template extends React.Component {

  render() {
    const { children } = this.props

    return (
      <Container>
        <Sidebar />
        {children}
      </Container>
    )
  }
}

export default Template
