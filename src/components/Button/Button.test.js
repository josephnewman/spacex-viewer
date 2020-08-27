import React from 'react';
import { mount } from 'enzyme';
import { Button } from './Button';
import axe from '../../axe.js';

describe('Button', () => {
  let wrapper;
  let clickMock;
  let text;

  beforeEach(() => {
    clickMock = jest.fn();
    text = 'Hello World';

    wrapper = mount(
      <Button name="test" onClick={clickMock}>
        {text}
      </Button>
    );
  });

  test('renders basic button', () => {
    expect(wrapper.find('[data-qa="test-button"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('renders expected content', () => {
    expect(wrapper.find('[data-qa="test-button"]').text()).toBe(text);
  });

  describe('when the user clicks the button', () => {
    beforeEach(() => {
      wrapper.find('[data-qa="test-button"]').simulate('click');
    });

    test('renders expected modal content', () => {
      expect(clickMock).toHaveBeenCalled();
    });
  });

  describe('when selected is set to true', () => {
    beforeEach(() => {
      wrapper.setProps({ selected: true });
    });

    test('renders expected title', () => {
      expect(wrapper.find('.is-primary').exists()).toBe(true);
    });
  });
});
