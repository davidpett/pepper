import styles from './router.styles'
import { StackNavigatorConfig } from 'react-navigation'

export const headerConfig: Partial<StackNavigatorConfig> = {
  cardOverlayEnabled: true,
  headerLayoutPreset: 'center',
  headerMode: 'float',
  headerTransitionPreset: 'uikit',
  defaultNavigationOptions: {
    headerTintColor: '#333333',
  },
}

export const stackNavigationOptions = { headerStyle: styles.header, headerTitleStyle: styles.headerTitle }
