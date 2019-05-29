import React from 'react'
import logo from './profile.svg'
import axios from 'axios'
class profileComplete extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      website: '',
      country_code: '',
      address: '',
      name:'',
      mobile_number:'',
      phone_number:'',
      description:'',
      token: window.localStorage.getItem('token')
    }
  }

  handleChange (e) {
    console.log('e:', e.target.value)
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append(' website', this.state.website)
    fdata.append('country_code', this.state.country_code)
    fdata.append('address', this.state.address)
    fdata.append('name', this.state.name)
    fdata.append('mobile_number', this.state.mobile_number)
    fdata.append('phone_number', this.state.phone_number)
    fdata.append('description', this.state.description)
    fdata.append('user_type', 'organization')
    fdata.append('location_lat', 43)
    fdata.append('location_long', -79)
    console.log('fdata', fdata)
    axios.post('https://api.paywith.click/auth/profile/', fdata)
      .then(response => {
        console.log('response...', response)
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch(error => {
        console.log('error...', error)
      })
  }
  
  render () {
    return (
      <div className='app' >
        <img src={logo} alt={'logo'} className='profileLogo' />
        <a href='https://google.com' className='learnLink'>learn more</a>
        <div className='container'>
          <p />
          <p className='pageUse'>profile view</p>
          <p />
          <p className='inPageText'>full name</p>
          <input
            className='my-input'
            placeholder='full name'
            onChange={(e) => this.handleChange(e)}
            name='name'
          />
          <p className='inPageText'>website</p>
          <input 
            className='my-input' 
            placeholder='website' 
            name='website'
            onChange={(e) => this.handleChange(e)}
          />
          <p className='inPageText'>mobile Number</p>
          <input 
            className='my-input' 
            placeholder='mobile' 
            name='mobile_Number'
            onChange={(e) => this.handleChange(e)}
          />
          <p className='inPageText'>phone Number</p>
          <input 
            className='my-input' 
            placeholder='phone' 
            name='phone_Number'
            onChange={(e) => this.handleChange(e)}
          />
          <p className='inPageText'>country code</p>
          <input 
            className='my-input' 
            placeholder='country code'
            name='country_code'
            onChange={(e) => this.handleChange(e)} 
          />
          <p className='inPageText'>address</p>
          <input 
            className='my-input' 
            placeholder='address' 
            name='address'
            onChange={(e) => this.handleChange(e)}
          />
          <p className='inPageText'>description</p>
          <input 
            className='my-input' 
            placeholder='description' 
            name='description'
            onChange={(e) => this.handleChange(e)}
          />
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

export default profileComplete
