import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RiceGrid from 'zenme-xie/components/RiceGrid';
import { isHanzi } from 'zenme-xie/utils/hanzi';

export default function HanziGrid({
  character,
  id,
  size = 300,
  delayBetweenStrokes = 1000,
  // strokeColor = '#dddddd',
  strokeColor = '#555555',
  radicalColor = null,
  // outlineColor = '#333333',
  outlineColor = '#cccccc',
  animateOnClick = false,
}: HanziGridProp) {
  useEffect(() => {
    if (isHanzi(character)) {
      const writer = HanziWriter.create(id, character, {
        width: size,
        height: size,
        strokeColor,
        delayBetweenStrokes,
        radicalColor,
        outlineColor,
      });
      if (animateOnClick) {
        document.getElementById(id)?.addEventListener('click', () => {
          writer.animateCharacter();
        });
      }
    }
  });
  return <RiceGrid id={id} />;
}

interface HanziGridProp {
  character: string;
  id: string;
  size?: number;
  delayBetweenStrokes?: number;
  strokeColor?: string;
  radicalColor?: string | null;
  outlineColor?: string;
  animateOnClick?: boolean;
}

HanziGrid.propTypes = {
  character: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  delayBetweenStrokes: PropTypes.number,
  strokeColor: PropTypes.string,
  radicalColor: PropTypes.string,
  outlineColor: PropTypes.string,
  animateOnClick: PropTypes.bool,
};
