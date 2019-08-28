import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

const styles = StyleSheet.create<{ container: ViewStyle; title: TextStyle }>({
  container: {
    backgroundColor: '#cccccc',
    borderRadius: 8,
    height: 100,
    width: 150,
    marginHorizontal: 8,
  },
  title: {},
})

export default styles
