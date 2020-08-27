import React from 'react';
import { mount } from 'enzyme';
import { ShipTable } from './ShipTable';
import axe from '../../axe.js';

describe('ShipTable', () => {
  const mockShips = [
    {
      ship_id: 'foo',
      ship_name: 'bar',
      home_port: 'qux',
      active: true,
    },
    {
      ship_id: 'quux',
      ship_name: 'corge',
      home_port: 'grault',
      active: true,
    },
  ];

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<ShipTable ships={mockShips} />);
  });

  test('renders basic ship table', () => {
    expect(wrapper.find('[data-qa="ship-table"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('should have expected first ship', () => {
    expect(wrapper.find('[data-qa="ship-row"]').at(0).text()).toContain(mockShips[0].ship_id);
    expect(wrapper.find('[data-qa="ship-row"]').at(0).text()).toContain(mockShips[0].ship_name);
    expect(wrapper.find('[data-qa="ship-row"]').at(0).text()).toContain(mockShips[0].home_port);
    expect(wrapper.find('[data-qa="ship-row"]').at(0).text()).toContain(mockShips[0].active.toString());
  });

  test('should have expected second ship', () => {
    expect(wrapper.find('[data-qa="ship-row"]').at(1).text()).toContain(mockShips[1].ship_id);
    expect(wrapper.find('[data-qa="ship-row"]').at(1).text()).toContain(mockShips[1].ship_name);
    expect(wrapper.find('[data-qa="ship-row"]').at(1).text()).toContain(mockShips[1].home_port);
    expect(wrapper.find('[data-qa="ship-row"]').at(1).text()).toContain(mockShips[1].active.toString());
  });
});
