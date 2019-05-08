import React from 'react';
import logo from './profile.svg';
class profileComplete extends React.Component {
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
        <a href="https://google.com" className="learnLink">learn more</a>
        <div className='container'>
          <p></p>
          <p className="pageUse">profile view</p>
          <p></p>
          <p className="inPageText">full name</p>
          <input
            className='my-input'
            placeholder='full name'
            onChange = {(e) => this.handleChange(e)}
            />
          <p className="inPageText">email</p>
          <input className='my-input' placeholder='email' />
          <p className="inPageText">age</p>
          <input className='my-input' placeholder='age' />

          <button
            className='submit'
            onClick = {() => this.handleClick() }
          >
            submit
          </button>
        </div> 
        
      </div>
    );
  }
}

export default profileComplete;
