import React from 'react';
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import App from './App'
import LeftBar from './LeftBar'
import Car from './Car'
import About from './About'

configure({
  adapter: new Adapter()
})

describe('<App />', () => {
  it(('Should render <LeftBar />'), () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(LeftBar)).toHaveLength(1)
  })
  it(('Should render <About />'), () => {
    const wrapper = shallow(<App />)
    expect(wrapper.find(About)).toHaveLength(1)
  })
})


