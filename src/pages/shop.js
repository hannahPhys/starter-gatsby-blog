import React from 'react'

import Layout from '../components/layout'


class ShopIndex extends React.Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Shop</h1>
        <p>The shop is still in development</p>
      </Layout>
    )
  }
}

export default ShopIndex

