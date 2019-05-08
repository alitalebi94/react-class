import React from 'react';
import logo from './profile.svg';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: 'wsdfgh',
      password: ''
    }
  }

  handleChange(e) {
    console.log('e:', e.target.value)
    this.setState({email : e.target.value})
  }

  handleClick() {
    console.log('this',this)
  }
  render() {
    return (
      <div className="app"  >
        <img src={logo} alt={"logo"} className="profileLogo"/>
        <div className='container'>
          <p className="pageUse">sign in</p>
          <p></p>
          <p className="inPageText">username:</p>
          <input
            className='my-input'
            placeholder='email'
            onChange = {(e) => this.handleChange(e)}
            />

          <p> {this.state.email} </p>
          <p className="inPageText">password:</p>
          <input className='my-input' placeholder='password' />
          <button
            className='submit'
            onClick = {() => this.handleClick() }
          >
            login
          </button>
        </div> 
        <p className="endPageText">Welcome to the official Telegram web-client.</p>
        <a href="https://google.com" className="learnLink">learn more</a>
      </div>
    );
  }
}

export default Login;
