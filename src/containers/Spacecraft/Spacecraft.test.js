import React from 'react';
import { act } from '@testing-library/react';
import Api from '../../services/Api';
import { mount } from 'enzyme';
import Spacecraft from './Spacecraft';
import axe from '../../axe.js';

describe('Spacecraft', () => {
  let wrapper;
  let resolveApi;

  beforeEach(async () => {
    jest.spyOn(Api, 'get').mockReturnValue(
      new Promise((resolvePromise) => {
        resolveApi = resolvePromise;
      })
    );

    wrapper = mount(<Spacecraft />);
  });

  test('renders basic spacecraft container', () => {
    expect(wrapper.find('[data-qa="spacecraft"]').exists()).toBe(true);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  describe('when the API resolves', () => {
    beforeEach(async () => {
      await act(async () => {
        await resolveApi({ data: [] });
      });

      wrapper.update();
    });

    test('should have rocket viewer by default', async () => {
      expect(wrapper.find('[data-qa="rocket-viewer"]').exists()).toBe(true);
    });

    describe('when the user clicks on the dragons button', () => {
      beforeEach(async () => {
        await act(async () => {
          await wrapper.find('[data-qa="dragons-button"]').simulate('click');

          await resolveApi({ data: [] });
        });

        wrapper.update();
      });

      test('should render the dragon viewer', async () => {
        expect(wrapper.find('[data-qa="dragon-viewer"]').exists()).toBe(true);
      });
    });

    describe('when the user clicks on the rocket button', () => {
      beforeEach(async () => {
        await act(async () => {
          await wrapper.find('[data-qa="rockets-button"]').simulate('click');

          await resolveApi({ data: [] });
        });

        wrapper.update();
      });

      test('should render the dragon viewer', async () => {
        expect(wrapper.find('[data-qa="rocket-viewer"]').exists()).toBe(true);
      });
    });
  });
});
