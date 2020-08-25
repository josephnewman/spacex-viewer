import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  test('renders basic app', () => {
    expect(wrapper.find('.app').exists()).toBe(true);
  });
});
