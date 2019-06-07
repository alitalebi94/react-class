import React from 'react'
import './App.css'
import Login from './components/login'
//import Massenger from './components/Massenger'
import SignUp from './components/signUUP'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import conversation from './reducer/conversation'
import Profile from './components/profileComplete'
import Massenger from './container/massengerContainer'

const store = createStore(conversation)

class App extends React.Component {
  render () {
    return (
    //  <Router>
    //     <Route exact path='/' component={Login} />
    //     <Route path='/signup' component={SignUp} />
    //     <Route path='/massenger' component={Massenger} />
    //   </Router>

      // <Provider store={store}>
      //   <Massenger />
      // </Provider>
   <Profile />
     )
  }
}

export default App
