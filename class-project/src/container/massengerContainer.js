import { connect } from 'react-redux'
import Massenger from '../components/Massenger'

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const mapStateToProps = state => {
  console.log(state)
  return {
    state
  }
}

const massengerContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Massenger)

export default massengerContainer
