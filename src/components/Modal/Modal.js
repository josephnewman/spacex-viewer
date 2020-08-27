import React, { useState } from 'react';
import classNames from 'classnames';

export function Modal({ button, title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const modalClasses = classNames({
    modal: true,
    'is-active': isOpen,
  });

  return (
    <>
      {React.cloneElement(button, { onClick: () => setIsOpen(true), 'data-qa': 'modal-button' })}
      <div data-qa="modal" className={modalClasses}>
        <div data-qa="modal-background" onClick={() => setIsOpen(false)} className="modal-background"></div>
        <div className="modal-card">
          <div aria-label={title} className="modal-card-head">
            <p data-qa="modal-title" className="modal-card-title">
              {title}
            </p>
            <button
              data-qa="modal-close-button"
              onClick={() => setIsOpen(false)}
              className="delete"
              aria-label="close"
            ></button>
          </div>
          <div data-qa="modal-content" className="modal-card-body">
            {children}
          </div>
        </div>
      </div>
    </>
  );
}
