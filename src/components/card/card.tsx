import * as React from 'react'
import { TouchableOpacity, TouchableOpacityProps, Text } from 'react-native'
import styles from './card.styles'

export interface ICard extends TouchableOpacityProps {
  title: string
}

const Card: React.FC<ICard> = ({ title, onPress, ...rest }) => (
  <TouchableOpacity activeOpacity={0.7} onPress={onPress} style={styles.container} {...rest}>
    <Text style={styles.title}>{title}</Text>
  </TouchableOpacity>
)

export default Card
