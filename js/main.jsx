import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import  textInvaders from './reducers/textinvaders.js'
import App from './components/app.jsx'

const mountNode = document.getElementById('app')

const store = createStore(textInvaders)

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, mountNode)
}

store.subscribe(render)
render()
