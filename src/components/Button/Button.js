import React from 'react';
import classNames from 'classnames';

export function Button({ name, selected = false, onClick, children }) {
  const buttonClasses = classNames({
    button: true,
    'is-link': !selected,
    'is-primary': selected,
  });

  return (
    <button data-qa={`${name}-button`} onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
