import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, cleanup, fireEvent } from '@testing-library/react'
import SimpleBlog from './SimpleBlog'

afterEach(cleanup)

test('renders title', () => {
  const simpleBlog = {
    title: 'How to train your voice',
    author: 'Morgan Freeman',
    likes: 15
  }

  const component = render(
    <SimpleBlog blog={simpleBlog} />
  )

  component.debug()

  const div = component.container.querySelector('.titleDiv')
  expect(div).toHaveTextContent('How to train your voice')
})

test('renders author', () => {
  const simpleBlog = {
    title: 'How to train your voice',
    author: 'Morgan Freeman',
    likes: 15
  }

  const component = render(
    <SimpleBlog blog={simpleBlog} />
  )

  const div = component.container.querySelector('.titleDiv')
  expect(div).toHaveTextContent('Morgan Freeman')
})

test('renders likes', () => {
  const simpleBlog = {
    title: 'How to train your voice',
    author: 'Morgan Freeman',
    likes: 15
  }

  const component = render(
    <SimpleBlog blog={simpleBlog} />
  )

  const div = component.container.querySelector('.likesDiv')
  expect(div).toHaveTextContent('15')
})

test('clicking the button twice calls the event handler twice', () => {
  const simpleBlog = {
    title: 'How to train your voice',
    author: 'Morgan Freeman',
    likes: 15
  }

  const mockHandler = jest.fn()

  const { getByText } = render(
    <SimpleBlog blog={simpleBlog} onClick={mockHandler} />
  )

  const button = getByText('like')
  fireEvent.click(button)
  fireEvent.click(button)

  expect(mockHandler.mock.calls.length).toBe(2)
})