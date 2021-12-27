import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Feed from './pages/Feed'

const Routes = createAppContainer(
    createStackNavigator({
      Feed,
    },
      {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
        }
      }
  )
)

export default Routes