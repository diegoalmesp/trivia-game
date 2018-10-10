import React from 'react'
import { mount } from 'enzyme'

import Spinner from './Spinner'

describe('<Spinner />', () => {
  let wrapper

  describe('basic component rendering with non props passed', () => {
    beforeEach(() => {
      wrapper = mount(<Spinner />)
    })

    const defaultElement = (
      <div className="spinner-bg">
        <div className="lds-circle"></div>
      </div>
    )

    it('should render the exact structure from `defaultElement` variable', () => {
      expect(
        wrapper.containsMatchingElement(defaultElement)
      ).toBe(true)
    })

    it('shoud render a div with class `spinner-bg`', () => {
      expect(
          wrapper.find('div.spinner-bg').first().length
      ).toBe(1)
    })

    it('shoud render a div with class `lds-circle`', () => {
      expect(
          wrapper.find('div.lds-circle').first().length
      ).toBe(1)
    })
  })


  describe('custom component rendering with prop `ring`', () => {
    beforeEach(() => {
      wrapper = mount(<Spinner spinner="ring" />)
    })

    const customElement = (
      <div className="spinner-bg">
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )

    it('should render the exact structure from `customElement` variable', () => {
      expect(
        wrapper.containsMatchingElement(customElement)
      ).toBe(true)
    })

    it('shoud render a div with class `spinner-bg`', () => {
      expect(
          wrapper.find('div.spinner-bg').first().length
      ).toBe(1)
    })

    it('shoud render a div with class `lds-ring`', () => {
      expect(
          wrapper.find('div.lds-ring').first().length
      ).toBe(1)
    })

    it('shoud render 4 divs inside `div.lds-ring`', () => {
      expect(
          wrapper.find('div.lds-ring div').length
      ).toBe(4)
    })
  })


  describe('custom component rendering with prop `ellipsis`', () => {
    beforeEach(() => {
      wrapper = mount(<Spinner spinner="ellipsis" />)
    })

    const customElement = (
      <div className="spinner-bg">
        <div className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    )

    it('should render the exact structure from `customElement` variable', () => {
      expect(
        wrapper.containsMatchingElement(customElement)
      ).toBe(true)
    })

    it('shoud render a div with class `spinner-bg`', () => {
      expect(
          wrapper.find('div.spinner-bg').first().length
      ).toBe(1)
    })

    it('shoud render a div with class `lds-ellipsis`', () => {
      expect(
          wrapper.find('div.lds-ellipsis').first().length
      ).toBe(1)
    })

    it('shoud render 4 divs inside `div.lds-ellipsis`', () => {
      expect(
          wrapper.find('div.lds-ellipsis div').length
      ).toBe(4)
    })
  })


  describe('custom component rendering with prop `ripple`', () => {
    beforeEach(() => {
      wrapper = mount(<Spinner spinner="ripple" />)
    })

    const customElement = (
      <div className="spinner-bg">
        <div className="lds-ripple">
          <div></div>
          <div></div>
        </div>
      </div>
    )

    it('should render the exact structure from `customElement` variable', () => {
      expect(
        wrapper.containsMatchingElement(customElement)
      ).toBe(true)
    })

    it('shoud render a div with class `spinner-bg`', () => {
      expect(
          wrapper.find('div.spinner-bg').first().length
      ).toBe(1)
    })

    it('shoud render a div with class `lds-ripple`', () => {
      expect(
          wrapper.find('div.lds-ripple').first().length
      ).toBe(1)
    })

    it('shoud render 4 divs inside `div.lds-ripple`', () => {
      expect(
          wrapper.find('div.lds-ripple div').length
      ).toBe(2)
    })
  })
})