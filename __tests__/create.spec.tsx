import * as React from 'react'
import { mount } from 'enzyme'
import CreatePage from '../pages/create'
describe('Pages', () => {
  describe('Create', () => {
    it('should render without throwing an error, and renders the title',
      () => {
        const wrap = mount(<CreatePage />);
        expect(wrap.find('h1').text()).toBe('Create a Podcast')
      })
  })
  describe('Create', () => {
    it('should ask the user for Podcast title',
      () => {
        const wrap = mount(<CreatePage />);
        expect(wrap.find('h3').text()).toBe('Title')
      })
  })
  describe('Create', () => {
    it('should ask the user for Podcast links',
      () => {
        const wrap = mount(<CreatePage />);
        expect(wrap.find('h3').text()).toBe('Link(s)')
      })
  })
  describe('Create', () => {
    it('should ask the user for Podcast description',
      () => {
        const wrap = mount(<CreatePage />);
        expect(wrap.find('h3').text()).toBe('Description')
      })
  })
})
