import React, { useState } from 'react';
import { spacecraftTypes } from '../../constants';
import { Button, SpacecraftFetch, DragonFeed, RocketFeed, ShipTable } from '../../components';

function Spacecraft() {
  const [selected, setSelected] = useState(spacecraftTypes.ROCKET);

  return (
    <div data-qa="spacecraft" className="container">
      <div className="buttons">
        <Button
          name="rockets"
          selected={selected === spacecraftTypes.ROCKET}
          onClick={() => setSelected(spacecraftTypes.ROCKET)}
        >
          Rockets
        </Button>
        <Button
          name="dragons"
          selected={selected === spacecraftTypes.DRAGON}
          onClick={() => setSelected(spacecraftTypes.DRAGON)}
        >
          Dragons
        </Button>
        <Button
          name="ships"
          selected={selected === spacecraftTypes.SHIP}
          onClick={() => setSelected(spacecraftTypes.SHIP)}
        >
          Ships
        </Button>
      </div>
      <div>
        {selected === spacecraftTypes.ROCKET && (
          <SpacecraftFetch url="/rockets" render={(data) => <RocketFeed rockets={data} />} />
        )}
        {selected === spacecraftTypes.DRAGON && (
          <SpacecraftFetch url="/dragons" render={(data) => <DragonFeed dragons={data} />} />
        )}
        {selected === spacecraftTypes.SHIP && (
          <SpacecraftFetch url="/ships" render={(data) => <ShipTable ships={data} />} />
        )}
      </div>
    </div>
  );
}

export default Spacecraft;
