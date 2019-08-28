import { HomeNavigator } from '@screens/home'
import { SettingsNavigator } from '@screens/settings'
import { createAppContainer, createBottomTabNavigator } from 'react-navigation'
import styles from './router.styles'

const Router = createBottomTabNavigator(
  {
    Home: HomeNavigator,
    Settings: SettingsNavigator,
  },
  {
    animationEnabled: true,
    resetOnBlur: true,
    tabBarOptions: {
      allowFontScaling: false,
      activeTintColor: '#333333',
      inactiveTintColor: '#999999',
      style: styles.tabBar,
    },
  }
)

export default createAppContainer(Router)
