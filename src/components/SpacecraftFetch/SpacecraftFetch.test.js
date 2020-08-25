import React from 'react';
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';
import Api from '../../services/Api';
import axe from '../../axe.js';
import { SpacecraftFetch } from './SpacecraftFetch';

describe('SpacecraftFetch', () => {
  const url = '/foobar';
  const mockResponse = { data: { msg: 'hello' } };
  let wrapper;
  let mockApi;
  let resolveApi;
  let rejectApi;

  beforeEach(() => {
    mockApi = jest.spyOn(Api, 'get').mockReturnValue(
      new Promise((resolvePromise, rejectPromise) => {
        resolveApi = resolvePromise;
        rejectApi = rejectPromise;
      })
    );

    wrapper = mount(<SpacecraftFetch url={url} render={(data) => <div data-qa="test-component">{data.msg}</div>} />);
  });

  test('should have no accessibility issues', async () => {
    const results = await axe(wrapper.getDOMNode());

    expect(results).toHaveNoViolations();
  });

  test('should call the mock api with the expected url', () => {
    expect(mockApi).toHaveBeenCalledWith(url);
  });

  test('should show the loading spinner', () => {
    expect(wrapper.find('[data-qa="fetch-loading"]').exists()).toBe(true);
  });

  describe('when the api request fails', () => {
    beforeEach(async () => {
      await act(async () => {
        await rejectApi();
      });

      wrapper.update();
    });

    test('should NOT show the loading spinner', () => {
      expect(wrapper.find('[data-qa="fetch-loading"]').exists()).toBe(false);
    });

    test('should show the error message', () => {
      expect(wrapper.find('[data-qa="fetch-erorr-message"]').text()).toBe(
        'Uh oh! Something went wrong fetching /foobar :('
      );
    });
  });

  describe('when the api requests succeeds', () => {
    beforeEach(async () => {
      await act(async () => {
        await resolveApi(mockResponse);
      });

      wrapper.update();
    });

    test('should NOT show the loading spinner', () => {
      expect(wrapper.find('[data-qa="fetch-loading"]').exists()).toBe(false);
    });

    test('should show the expected component', () => {
      expect(wrapper.find('[data-qa="test-component"]').text()).toBe(mockResponse.data.msg);
    });
  });
});
