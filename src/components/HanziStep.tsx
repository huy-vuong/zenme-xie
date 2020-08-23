import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RiceGrid from 'zenme-xie/components/RiceGrid';
import styles from 'zenme-xie/components/HanziStep.module.scss';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';

export default function HanziStep({
  characterData,
  strokeIndex,
  id,
  size = 94,
  // strokeColor = '#dddddd',
  strokeColor = '#555555',
  activeStrokeColor,
}: HanziStepProp) {
  useEffect(() => {
    function renderFanningStrokes(target: HTMLElement, strokes: Array<string>) {
      const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      target.appendChild(svg);
      const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
      const transformData = HanziWriter.getScalingTransform(size, size);
      group.setAttributeNS(null, 'transform', transformData.transform);
      svg.appendChild(group);
      strokes.forEach((strokePath: string, index: number) => {
        const path = document.createElementNS(
          'http://www.w3.org/2000/svg',
          'path'
        );
        path.setAttributeNS(null, 'd', strokePath);
        path.style.fill =
          activeStrokeColor && index === strokeIndex
            ? activeStrokeColor
            : strokeColor;
        group.appendChild(path);
      });
    }

    renderFanningStrokes(
      document.getElementById(id) as HTMLElement,
      characterData.strokes.slice(0, strokeIndex + 1)
    );
  });
  return <RiceGrid id={id} size={size} className={styles.hanziStep} />;
}

interface HanziStepProp {
  characterData: HanziGraphicsEntry;
  strokeIndex: number;
  id: string;
  size?: number;
  strokeColor?: string;
  activeStrokeColor?: string;
}

HanziStep.propTypes = {
  character: PropTypes.shape({
    strokes: PropTypes.arrayOf(PropTypes.string).isRequired,
    medians: PropTypes.arrayOf(
      PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.number.isRequired).isRequired
      )
    ).isRequired,
    radStrokes: PropTypes.arrayOf(PropTypes.number).isRequired,
  }),
  strokeIndex: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  strokeColor: PropTypes.string,
  activeStrokeColor: PropTypes.string,
};
