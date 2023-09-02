import React, { Component } from 'react'
import MyNavbar from './components/navbar/MyNavbar'
import { myNavLink } from "./data/myNavLink"
import MyContainer from './components/container/MyContainer'
import scifi from "./data/scifi.json"
import MyFooter from './components/footer/MyFooter'
import { myFooterLink } from './data/myFooter'

export class App extends Component {
  render() {
    return (
      <>
      <MyNavbar myNavLink={ myNavLink }/>
      <MyContainer scifi={ scifi }/>
      <MyFooter myFooterLink={ myFooterLink}/>
      </>
    )
  }
}

export default App
