import React, { useState } from 'react';
import { spacecraftTypes } from '../../constants';
import { Button, SpacecraftFetch, DragonFeed, RocketFeed } from '../../components';

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
      </div>
      <div>
        {selected === spacecraftTypes.ROCKET && (
          <SpacecraftFetch url="/rockets" render={(data) => <RocketFeed rockets={data} />} />
        )}
        {selected === spacecraftTypes.DRAGON && (
          <SpacecraftFetch url="/dragons" render={(data) => <DragonFeed dragons={data} />} />
        )}
      </div>
    </div>
  );
}

export default Spacecraft;
