import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import HanziStep from 'zenme-xie/components/HanziStep';
import styles from 'zenme-xie/components/HanziSteps.module.scss';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';

export default function HanziSteps({ character, id }: HanziStepsProp) {
  const [characterData, setCharacterData] = useState<HanziGraphicsEntry | null>(
    null
  );
  useEffect(() => {
    if (!characterData) {
      HanziWriter.loadCharacterData(character[0]).then(
        (loadedCharacterData: HanziGraphicsEntry) => {
          setCharacterData(loadedCharacterData);
        }
      );
    }
  });
  return characterData ? (
    <div id={id} className={styles.hanziSteps}>
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
    <div id={id} className={styles.hanziSteps} />
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
