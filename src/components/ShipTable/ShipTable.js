import React from 'react';

export function ShipTable({ ships }) {
  return (
    <div data-qa="ship-table" className="ship-table">
      <h1 className="title">
        <span className="mx-2" role="img" aria-label="ship">
          ⛴
        </span>
        Ships
      </h1>
      <h2 className="subtitle">(This page is a little different in order to demo render props)</h2>

      <div className="columns is-centered">
        <div className="column is-half-tablet">
          <div className="my-5 mx-5">
            <table className="table">
              <thead>
                <tr>
                  <th>Ship ID</th>
                  <th>Name</th>
                  <th>Home Port</th>
                  <th>Active</th>
                </tr>
              </thead>
              <tbody>
                {ships.map((ship) => {
                  const { ship_id, ship_name, home_port, active } = ship;

                  return (
                    <tr key={ship_id} data-qa="ship-row">
                      <td>{ship_id}</td>
                      <td>{ship_name}</td>
                      <td>{home_port}</td>
                      <td>{active.toString()}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
