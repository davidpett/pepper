import * as React from 'react'
import { NavigationParams, NavigationScreenComponent } from 'react-navigation'
import Detail, { IDetail } from './detail'

export interface IDetailData extends IDetail {}

const DetailData: NavigationScreenComponent<NavigationParams, {}, IDetailData> = ({ title }) => {
  return <Detail title={title} />
}

DetailData.navigationOptions = ({ navigation }) => ({
  title: navigation.getParam('title', 'Detail'),
})

export default DetailData
