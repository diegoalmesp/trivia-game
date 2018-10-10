import React from 'react'
import { mount } from 'enzyme'

import Bold from './Bold'

describe('<Bold />', () => {
  let wrapper
  const text = 'text'

  describe('basic component rendering with only text passed', () => {
    beforeEach(() => {
      wrapper = mount(<Bold>{text}</Bold>)
    })

    const defaultElement = <span className="text-info font-weight-bold">{text}</span>

    it('should render a span element with class `text-info font-weight-bold` and content: `text`', () => {
      expect(
        wrapper.containsMatchingElement(defaultElement)
      ).toBe(true)
    })
  })

  describe('component rendering with text and level passed', () => {
    beforeEach(() => {
      wrapper = mount(<Bold level="warning">{text}</Bold>)
    })

    const customElement = <span className="text-warning font-weight-bold">{text}</span>

    it('should render a span element with class `text-warning font-weight-bold` and content: `text`', () => {
      expect(
        wrapper.containsMatchingElement(customElement)
      ).toBe(true)
    })
  })
})