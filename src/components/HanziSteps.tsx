import PropTypes from 'prop-types';
import React from 'react';
import HanziStep from 'zenme-xie/components/HanziStep';
import styles from 'zenme-xie/components/HanziSteps.module.scss';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';

export default function HanziSteps({ graphicsEntry, id }: HanziStepsProp) {
  return (
    <div id={id} className={styles.hanziSteps}>
      {graphicsEntry?.strokes?.map((_stroke, index) => (
        <span
          key={`${id}-stroke-${index}`}
          data-testid={`${id}-stroke-${index}`}
        >
          <HanziStep
            characterData={graphicsEntry}
            strokeIndex={index}
            id={`${id}-stroke-${index}`}
            activeStrokeColor="#dc3545"
          />
        </span>
      ))}
    </div>
  );
}

interface HanziStepsProp {
  graphicsEntry: HanziGraphicsEntry | null;
  id: string;
  size?: number;
  strokeColor?: string;
  activeStrokeColor?: string;
}

HanziSteps.propTypes = {
  graphicsEntry: PropTypes.shape({
    character: PropTypes.string,
    strokes: PropTypes.arrayOf(PropTypes.string),
    medians: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    ),
    radStrokes: PropTypes.arrayOf(PropTypes.number),
  }),
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeColor: PropTypes.string,
  activeStrokeColor: PropTypes.string,
};
