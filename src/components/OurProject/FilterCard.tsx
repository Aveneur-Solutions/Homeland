import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'
import "./project.css"

export default class FilterCard extends Component {
  state = { activeItem: 'closest' }


  render() {
    const { activeItem } = this.state

    return (
      <Menu text vertical className="filtercontainer">
        <Menu.Item header>Search By</Menu.Item>
        <Menu.Item
          name='Price'
          active={activeItem === 'closest'}
        //   onClick={this.handleItemClick}
        />
        <Menu.Item
          name='Size'
          active={activeItem === 'mostComments'}
        //   onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}
