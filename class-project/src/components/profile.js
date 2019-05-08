import React from 'react';
import logo from './profile.svg';
class profile extends React.Component {
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
          <p className="pageUse">profile</p>
          <p></p>
          <p className="inPageText">first name</p>
          <input
            className='my-input'
            placeholder='first name'
            onChange = {(e) => this.handleChange(e)}
            />
          <p className="inPageText">last name</p>
          <input className='my-input' placeholder='last name' />
          

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

export default profile;
