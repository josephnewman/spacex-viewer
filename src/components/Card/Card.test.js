import React from 'react';
import { mount } from 'enzyme';
import { Card } from './Card';
import axe from '../../axe.js';

describe('Card', () => {
  const title = 'A title';
  const modalContent = 'Some modal content';

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Card title={title} modalContent={modalContent} />);
  });

  test('renders basic card', () => {
    expect(wrapper.find('[data-qa="card"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('renders expected title', () => {
    expect(wrapper.find('[data-qa="card-title"]').text()).toBe(title);
  });

  describe('when a imgUrl is provided', () => {
    const imgUrl = 'https://foo.bar';
    beforeEach(() => {
      wrapper.setProps({ imgUrl });
    });

    test('renders expected title', () => {
      expect(wrapper.find('[data-qa="card-img"]').prop('src')).toBe(imgUrl);
    });
  });

  describe('when the user opens the modal', () => {
    beforeEach(() => {
      wrapper.find('[data-qa="modal-button"]').simulate('click');
    });

    test('renders expected modal content', () => {
      expect(wrapper.find('[data-qa="modal-content"]').text()).toBe(modalContent);
    });
  });
});
