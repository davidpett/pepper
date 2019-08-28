import * as React from 'react'
import { useScreens } from 'react-native-screens'
import Router from '@router/router'

export default () => {
  useScreens()

  return <Router />
}
