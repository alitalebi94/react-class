import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  return {
    state: state
  }
}
const FooterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)

export default FooterContainer
