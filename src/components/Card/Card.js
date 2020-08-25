import React from 'react';
import { Modal } from '../';

export function Card({ imgUrl, title, modalContent }) {
  return (
    <div data-qa="card" className="card">
      <div className="card-image">
        {imgUrl && (
          <figure className="image is-4by3">
            <img data-qa="card-img" src={imgUrl} alt={title} />
          </figure>
        )}
      </div>
      <div className="card-content">
        <p data-qa="card-title" className="title is-4">
          {title}
        </p>
      </div>
      <div aria-label={`${title} card`} className="card-footer">
        <Modal button={<button className="card-footer-item button is-link">View more</button>} title={title}>
          {modalContent}
        </Modal>
      </div>
    </div>
  );
}
