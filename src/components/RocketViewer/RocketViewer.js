import React from 'react';
import { Card } from '../Card';

export function RocketViewer({ rockets }) {
  return (
    <div data-qa="rocket-viewer" className="rocket-viewer">
      <h1 className="title">
        <span className="mx-2" role="img" aria-label="rocket">
          🚀
        </span>
        Rockets
      </h1>
      <div className="columns is-centered">
        <div className="column is-half-tablet">
          {rockets.map((rocket) => {
            const { country, company, flickr_images, first_flight, success_rate_pct, stages, active, id } = rocket;

            return (
              <div key={id} className="my-5 mx-5">
                <Card
                  title={`${company}, ${country}`}
                  imgUrl={flickr_images[0]}
                  modalContent={
                    <div>
                      <div>First flight: {first_flight}</div>
                      <div>Success rate: {success_rate_pct}%</div>
                      <div>Stages: {stages}</div>
                      <div>Active: {active.toString()}</div>
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
