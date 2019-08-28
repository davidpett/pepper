import { StyleSheet, ViewStyle, TextStyle } from 'react-native'

const styles = StyleSheet.create<{ header: ViewStyle; headerTitle: TextStyle; tabBar: ViewStyle }>({
  header: {
    borderBottomWidth: 0,
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 8,
  },
  headerTitle: {
    color: '#333333',
    fontSize: 20,
    fontWeight: '800',
  },
  tabBar: {
    borderTopWidth: 0,
    shadowColor: '#333333',
    shadowOffset: {
      width: 0,
      height: -4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,

    elevation: 8,
  },
})

export default styles
