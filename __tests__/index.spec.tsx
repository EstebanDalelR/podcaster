import * as React from 'react'
import { mount } from 'enzyme'
import IndexPage from '../pages/index'
describe('Pages', () => {
  describe('Index', () => {
    it('should render without throwing an error, and renders the welcome',
      () => {
        const wrap = mount(<IndexPage />);
        expect(wrap.find('h1').text()).toBe('Welcome to Podcaster')
      })
  })
  describe('Index', () => {
    it('should have a button asking the user to create a Podcast',
      () => {
        const wrap = mount(<IndexPage />);
        expect(wrap.find('button').text()).toBe('Create')
      })
  })
})
