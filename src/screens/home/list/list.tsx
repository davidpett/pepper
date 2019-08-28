import { Card } from '@components/card'
import * as React from 'react'
import { ScrollView, Text } from 'react-native'
import { useNavigation } from 'react-navigation-hooks'
import styles from './list.styles'

export interface IList {}

const List: React.FC<IList> = () => {
  const { navigate } = useNavigation()

  return (
    <ScrollView>
      <Text>List</Text>
      <ScrollView contentContainerStyle={styles.slider} horizontal showsHorizontalScrollIndicator={false}>
        <Card title="this" onPress={() => navigate('detail', { title: 'this' })} />
        <Card title="is" onPress={() => navigate('detail', { title: 'is' })} />
        <Card title="how" onPress={() => navigate('detail', { title: 'how' })} />
        <Card title="it" onPress={() => navigate('detail', { title: 'it' })} />
        <Card title="is" onPress={() => navigate('detail', { title: 'is' })} />
        <Card title="done" onPress={() => navigate('detail', { title: 'done' })} />
      </ScrollView>
    </ScrollView>
  )
}

export default List
