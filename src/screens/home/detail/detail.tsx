import * as React from 'react'
import { Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export interface IDetail {
  title: string
}

const Detail: React.FC<IDetail> = ({ title }) => (
  <ScrollView>
    <Text>{title}</Text>
  </ScrollView>
)

export default Detail
