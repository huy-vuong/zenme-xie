import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HanziStep from 'zenme-xie/HanziStep';
import CharacterData from 'zenme-xie/types/CharacterData';

export default function HanziSteps({ character, id }: HanziStepsProp) {
  const [characterData, setCharacterData] = useState<CharacterData | null>(
    null
  );
  useEffect(() => {
    if (!characterData) {
      HanziWriter.loadCharacterData(character[0]).then(
        (loadedCharacterData: CharacterData) => {
          setCharacterData(loadedCharacterData);
        }
      );
    }
  });
  return characterData ? (
    <div id={id} className="hanzi-steps">
      {characterData.strokes.map((_stroke, index) => (
        <span
          key={`${id}-stroke-${index}`}
          data-testid={`${id}-stroke-${index}`}
        >
          <HanziStep
            characterData={characterData}
            strokeIndex={index}
            id={`${id}-stroke-${index}`}
            activeStrokeColor="#dc3545"
          />
        </span>
      ))}
    </div>
  ) : (
    <div id={id} className="hanzi-steps" />
  );
}

interface HanziStepsProp {
  character: string;
  id: string;
  size?: number;
  strokeColor?: string;
  activeStrokeColor?: string;
}

HanziSteps.propTypes = {
  character: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeColor: PropTypes.string,
  activeStrokeColor: PropTypes.string,
};
