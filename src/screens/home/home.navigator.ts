import Detail from './detail/detail.data'
import List from './list/list.data'
import { createStackNavigator } from 'react-navigation'
import { stackNavigationOptions, headerConfig } from '@router/config'

export default createStackNavigator(
  {
    list: {
      screen: List,
      navigationOptions: stackNavigationOptions,
    },
    detail: {
      screen: Detail,
      navigationOptions: stackNavigationOptions,
    },
  },
  {
    ...headerConfig,
    initialRouteName: 'list',
  }
)
