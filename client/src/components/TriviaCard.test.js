import React from 'react'
import renderer from 'react-test-renderer';
import { mount } from 'enzyme'

import TriviaCard from './TriviaCard'

describe('<TriviaCard />', () => {
  let wrapper

  const trivia = {
    correct_answer: 'True',
    incorrect_answers: ['False'],
    category: 'category',
    question: 'question'
  }

  describe('component rendering', () => {
    beforeEach(() => {
      wrapper = mount(<TriviaCard trivia={trivia} />)
    })

    it('renders correctly', () => {
      const card = renderer
        .create(<TriviaCard trivia={trivia} />)
        .toJSON()
      expect(card).toMatchSnapshot()
    })

    it('shoud render a h3 tag with the content `category`', () => {
      expect(
          wrapper.find('h3').first().length
      ).toBe(1)

      expect(
        wrapper.find('h3').first().text()
      ).toEqual('category')
    })

    it('shoud render a p tag with the content `question`', () => {
      expect(
          wrapper.find('div.trivia-question-container p').first().length
      ).toBe(1)

      expect(
        wrapper.find('div.trivia-question-container p').first().text()
      ).toEqual('question')
    })

    it('should render 2 buttons to answer', () => {
      expect(
        wrapper.find('div.trivia-button-container button').length
      ).toBe(2)
    })
  })

})