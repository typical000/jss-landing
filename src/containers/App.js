import React from 'react'
import {JssProvider} from 'react-jss'
import jss from '../utils/jss'
import App from '../components/App'

const AppContainer = ({registry, ...props}) => (
  <JssProvider jss={jss} registry={registry}>
    <App {...props} />
  </JssProvider>
)

AppContainer.propTypes = {
  registry: React.PropTypes.shape({})
}

AppContainer.defaultProps = {
  registry: undefined
}

export default AppContainer
