import React from 'react'
import logo from './profile.svg'
import validate from '../validation/validateFunction'
import axios from 'axios'
import { Link } from 'react-router-dom'
class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false,
      error: {
        email: null,
        password: null
      }
    }
  }

  handleChange (e) {
    console.log('e:', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value },
      () => console.log('ee:', this.state[name])
    )
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError } })
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    var headers = {
      'Content-Type': 'application/json'
    }
    axios.post('https://api.paywith.click/auth/signin/', data, { headers: headers })
      .then(function (response) {
        console.log('response::::', response)
        window.localStorage.setItem('token', response.data.data.token)
        window.localStorage.setItem('id', response.data.data.profile.id)
      })
      .catch(function (error) {
        console.log('error::::', error)
      })
  }
  render () {
    return (
      <div className='app' >
        <img src={logo} alt={'logo'} className='loginLogo' />
        <div className='mycontainer extraLoginEdit'>
          <p className='pageUse'>sign in</p>
          <p />
          <p className='inPageText'>username:</p>
          <input
            name='email'
            className='my-input'
            placeholder='email'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.error.email !== null &&
            <p style={{ color: 'red' }}>{this.state.error.email}</p>
          }
          <p className='inPageText'>password:</p>
          <input
            name='password'
            className='my-input'
            placeholder='password'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.error.password !== null &&
            <p style={{ color: 'red' }}>{this.state.error.password}</p>
          }
          <button
            className='submit'
            onClick={() => this.handleClick()}
          >
            login
          </button>
          <Link
            className='submit'
            to='./signup'
          >
            sign up
          </Link>
        </div>
        <p className='endPageText'>Welcome to the official massanger web-client.</p>
        <a href='https://google.com' className='learnLink'>learn more</a>
      </div>
    )
  }
}

export default Login
