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
    it('should ask the user for Podcast title, links, description, guests, sponsors, and script',
      () => {
        const wrap = mount(<CreatePage />);
        let titles = wrap.find('h3')
        let titleTexts = ["Title", "Link(s)", "Description", "Guests", "Sponsors", "Script"]
        titles.forEach((element,index) => {
          expect(element.text()).toBe(titleTexts[index])
        });
      })
  })
  describe('Index', () => {
    it('should have a button allowing the user to save the Podcast',
      () => {
        const wrap = mount(<CreatePage />);
        expect(wrap.find('button').text()).toBe('Save')
      })
  })
})
