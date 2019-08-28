import { createStackNavigator } from 'react-navigation'
import { headerConfig, stackNavigationOptions } from '@router/config'
import List from './list/list.data'

export default createStackNavigator(
  {
    settings: {
      screen: List,
      navigationOptions: stackNavigationOptions,
    },
  },
  {
    ...headerConfig,
    initialRouteName: 'settings',
  }
)
