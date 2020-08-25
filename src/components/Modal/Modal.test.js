import React from 'react';
import { mount } from 'enzyme';
import { Modal } from './Modal';
import axe from '../../axe.js';

describe('Modal', () => {
  const title = 'A title';
  const modalContent = 'Some modal content';

  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <Modal title={title} button={<button />}>
        {modalContent}
      </Modal>
    );
  });

  test('renders basic modal', () => {
    expect(wrapper.find('[data-qa="modal-button"]').exists()).toBe(true);
  });

  describe('when the user opens the modal', () => {
    beforeEach(() => {
      wrapper.find('[data-qa="modal-button"]').simulate('click');
    });

    test('should have no accessibility issues', async () => {
      const results = await axe(wrapper.find('[data-qa="modal"]').getDOMNode());

      expect(results).toHaveNoViolations();
    });

    test('should have modal open', () => {
      expect(wrapper.find('.is-active').exists()).toBeDefined();
    });

    describe('when the user clicks the modals background', () => {
      beforeEach(() => {
        wrapper.find('[data-qa="modal-background"]').simulate('click');
      });

      test('should NOT show expected modal content', () => {
        expect(wrapper.find('.is-active').exists()).toBe(false);
      });
    });

    describe('when the user clicks the modals close button', () => {
      beforeEach(() => {
        wrapper.find('[data-qa="modal-close-button"]').simulate('click');
      });

      test('should NOT show expected modal content', () => {
        expect(wrapper.find('.is-active').exists()).toBe(false);
      });
    });
  });
});
