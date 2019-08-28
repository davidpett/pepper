import * as React from 'react'
import { ScrollView, Text } from 'react-native'

export interface IList {}

const List: React.FC<IList> = () => {
  return (
    <ScrollView>
      <Text>Settings list</Text>
    </ScrollView>
  )
}

export default List
