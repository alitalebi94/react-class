import React from 'react'
import logo from './profile.svg'
import axios from 'axios'
import validate from '../validation/validateFunction'
class signUP extends React.Component {
  constructor () {
    super()
    this.state = {
      email: '',
      password: '',
      reTypePassword: '',
      error: ''

    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    console.log('this', this)
    let data = {
      email: this.state.email,
      password: this.state.password
    }
    var headers = {
      'Content-Type': 'application/json'
    }
    if (this.state.password === this.state.reTypePassword) {
      axios.post('https://api.paywith.click/auth/signup/', data, { headers: headers })
        .then(function (response) {
          console.log('response::::', response)
          window.localStorage.setItem('token', response.data.data.token)
          window.localStorage.setItem('id', response.data.data.profile.id)
        })
        .catch(function (error) {
          console.log('error::::', error)
        })
    } else {
      this.setState({ error: 'Password and retype password do not match!' })
    }
  }
  render () {
    return (
      <div className='app' >
        <img src={logo} alt={'logo'} className='profileLogo' />
        <a href='https://google.com' className='learnLink'>learn more</a>
        <div className='container'>
          <p />
          <p className='pageUse'>sign up</p>
          <p />
          <p className='inPageText'>email</p>
          <input
            className='my-input'
            placeholder='email'
            name='email'
            onChange={(event) => this.handleChange(event)}
          />
          <p className='inPageText'>password</p>
          <input
            className='my-input'
            placeholder='password'
            name='password'
            onChange={(e) => this.handleChange(e)}
          />
          <p className='inPageText'>repassword</p>
          <input
            className='my-input'
            placeholder='re-type-password'
            name='reTypePassword'
            onChange={(e) => this.handleChange(e)}
          />
          { this.state.error &&
            <p> {this.state.error}</p>
          }

          <button
            className='submit'
            onClick={() => this.handleClick()}
          >
            submit
          </button>
        </div>

      </div>
    )
  }
}

export default signUP
