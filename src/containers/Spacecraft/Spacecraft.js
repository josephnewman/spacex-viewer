import React, { useState } from 'react';
import classNames from 'classnames';
import { spacecraftTypes } from '../../constants';
import { SpacecraftFetch, DragonViewer, RocketViewer } from '../../components';

function Spacecraft() {
  const [selected, setSelected] = useState(spacecraftTypes.ROCKET);

  var rocketClasses = classNames({
    button: true,
    'is-link': selected !== spacecraftTypes.ROCKET,
    'is-primary': selected === spacecraftTypes.ROCKET,
  });

  var dragonClasses = classNames({
    button: true,
    'is-link': selected !== spacecraftTypes.DRAGON,
    'is-primary': selected === spacecraftTypes.DRAGON,
  });

  return (
    <div data-qa="spacecraft" className="container">
      <div className="buttons">
        <button data-qa="rockets-button" onClick={() => setSelected(spacecraftTypes.ROCKET)} className={rocketClasses}>
          Rockets
        </button>
        <button data-qa="dragons-button" onClick={() => setSelected(spacecraftTypes.DRAGON)} className={dragonClasses}>
          Dragons
        </button>
      </div>
      <div>
        {selected === spacecraftTypes.ROCKET && (
          <SpacecraftFetch url="/rockets" render={(data) => <RocketViewer rockets={data} />} />
        )}
        {selected === spacecraftTypes.DRAGON && (
          <SpacecraftFetch url="/dragons" render={(data) => <DragonViewer dragons={data} />} />
        )}
      </div>
    </div>
  );
}

export default Spacecraft;
