import React from 'react';
import { Card } from '../Card';

export function DragonViewer({ dragons }) {
  return (
    <div data-qa="dragon-viewer" className="dragon-viewer">
      <h1 className="title">
        <span className="mx-2" role="img" aria-label="dragons">
          🛰
        </span>
        Dragons
      </h1>
      <div className="columns is-centered">
        <div className="column is-half-tablet">
          {dragons.map((dragon) => {
            const { name, flickr_images, type, active, crew_capacity, id } = dragon;

            return (
              <div key={id} className="my-5 mx-5">
                <Card
                  title={name}
                  imgUrl={flickr_images[0]}
                  modalContent={
                    <div>
                      <div>Type: {type}</div>
                      <div>Active: {active.toString()}</div>
                      <div>Crew Capacity: {crew_capacity}</div>
                    </div>
                  }
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
