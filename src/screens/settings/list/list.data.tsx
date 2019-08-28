import * as React from 'react'
import { NavigationParams, NavigationScreenComponent } from 'react-navigation'
import List, { IList } from './list'

export interface IListData extends IList {}

const ListData: NavigationScreenComponent<NavigationParams, {}, IListData> = () => {
  return <List />
}

ListData.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title', 'Settings'),
})

export default ListData
