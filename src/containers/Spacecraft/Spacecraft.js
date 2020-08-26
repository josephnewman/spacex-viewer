import React, { useState } from 'react';
import classNames from 'classnames';
import { spacecraftTypes } from '../../constants';
import { SpacecraftFetch, DragonFeed, RocketFeed } from '../../components';

function Spacecraft() {
  const [selected, setSelected] = useState(spacecraftTypes.ROCKET);

  const getButtonClasses = (spacecraftType) => {
    return classNames({
      button: true,
      'is-link': selected !== spacecraftType,
      'is-primary': selected === spacecraftType,
    });
  };

  return (
    <div data-qa="spacecraft" className="container">
      <div className="buttons">
        <button
          data-qa="rockets-button"
          onClick={() => setSelected(spacecraftTypes.ROCKET)}
          className={getButtonClasses(spacecraftTypes.ROCKET)}
        >
          Rockets
        </button>
        <button
          data-qa="dragons-button"
          onClick={() => setSelected(spacecraftTypes.DRAGON)}
          className={getButtonClasses(spacecraftTypes.DRAGON)}
        >
          Dragons
        </button>
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
