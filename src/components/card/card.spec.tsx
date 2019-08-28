import { render } from '@testing-library/react-native'
import * as React from 'react'
import Card from './card'

describe('Card', () => {
  const props = {
    title: 'hello',
  }

  const { container, getByTestId } = render(<Card {...props} />)

  test('snapshot', () => {
    expect(container).toMatchSnapshot()
  })
  test('render', () => {
    expect(getByTestId('cardContainer')).toBeTruthy()
    expect(getByTestId('cardTitle').props.children).toBe('hello')
  })
})
