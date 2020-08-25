import React from 'react';
import { mount } from 'enzyme';
import { RocketViewer } from './RocketViewer';
import axe from '../../axe.js';

describe('RocketViewer', () => {
  const mockRockets = [
    {
      id: 1,
      country: 'United Kingdom',
      company: 'UK Space Agency',
      flickr_images: ['http://www.foo.com'],
      first_flight: '2012-09-01',
      success_rate_pct: 99,
      stages: 2,
      active: false,
    },
    {
      id: 2,
      country: 'United States',
      company: 'NASA',
      flickr_images: ['http://www.foo.com'],
      first_flight: '2015-09-01',
      success_rate_pct: 99,
      stages: 1,
      active: true,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<RocketViewer rockets={mockRockets} />);
  });

  test('renders basic dragon viewer', () => {
    expect(wrapper.find('[data-qa="rocket-viewer"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('should have expected first card', () => {
    expect(wrapper.find('[data-qa="card-title"]').at(0).text()).toBe(
      `${mockRockets[0].company}, ${mockRockets[0].country}`
    );
  });

  test('should have expected second card', () => {
    expect(wrapper.find('[data-qa="card-title"]').at(1).text()).toBe(
      `${mockRockets[1].company}, ${mockRockets[1].country}`
    );
  });

  describe('when the user opens the modal', () => {
    beforeEach(() => {
      wrapper.find('[data-qa="modal-button"]').at(0).simulate('click');
    });

    test('should have expected first flight', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockRockets[0].first_flight);
    });

    test('should have expected success rate', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockRockets[0].success_rate_pct);
    });

    test('should have expected stages', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockRockets[0].stages);
    });

    test('should have expected active', () => {
      expect(wrapper.find('[data-qa="modal-content"]').at(0).text()).toContain(mockRockets[0].active.toString());
    });
  });
});
