import React from 'react';
import { mount } from 'enzyme';
import { DragonFeed } from './DragonFeed';
import axe from '../../../axe.js';

describe('DragonFeed', () => {
  const mockDragons = [
    {
      id: 1,
      name: 'Dragon',
      flickr_images: ['http://www.foo.com'],
      type: 'something',
      active: true,
      crew_capacity: 1,
    },
    {
      id: 2,
      name: 'Dragon 2',
      flickr_images: ['http://www.bar.com'],
      type: 'quz',
      active: false,
      crew_capacity: 2,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<DragonFeed dragons={mockDragons} />);
  });

  test('renders basic dragon feed', () => {
    expect(wrapper.find('[data-qa="dragon-feed"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('should have expected first card', () => {
    expect(wrapper.find('[data-qa="card-title"]').at(0).text()).toBe(mockDragons[0].name);
  });

  test('should have expected second card', () => {
    expect(wrapper.find('[data-qa="card-title"]').at(1).text()).toBe(mockDragons[1].name);
  });

  describe('when the user opens the modal', () => {
    beforeEach(() => {
      wrapper.find('[data-qa="modal-button"]').at(0).simulate('click');
    });

    test('should have expected type', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockDragons[0].type);
    });

    test('should have expected active or not', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockDragons[0].active.toString());
    });

    test('should have expected crew capacity', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockDragons[0].crew_capacity);
    });
  });
});
