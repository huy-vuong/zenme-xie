import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RiceGrid from 'zenme-xie/components/RiceGrid';
import { isHanzi } from 'zenme-xie/utils/hanzi';

export default function HanziGrid({
  character,
  id,
  size = 300,
  delayBetweenStrokes = 1000,
  strokeColor,
  radicalColor = null,
  outlineColor,
  animateOnClick = false,
}: HanziGridProp) {
  const defaultStrokeColor = '#555555';
  const defaultOutlineColor = '#cccccc';
  const [strokeRenderStarted, setStrokeRenderStarted] = useState(false);
  useEffect(() => {
    if (!strokeRenderStarted && isHanzi(character)) {
      setStrokeRenderStarted(true);
      const writer = HanziWriter.create(id, character, {
        width: size,
        height: size,
        strokeColor: strokeColor ?? defaultStrokeColor,
        delayBetweenStrokes,
        radicalColor,
        outlineColor: outlineColor ?? defaultOutlineColor,
      });
      if (animateOnClick) {
        document.getElementById(id)?.addEventListener('click', () => {
          writer.animateCharacter();
        });
      }
    }
  }, [
    strokeRenderStarted,
    character,
    id,
    size,
    delayBetweenStrokes,
    strokeColor,
    defaultStrokeColor,
    radicalColor,
    outlineColor,
    defaultOutlineColor,
    animateOnClick,
  ]);
  return <RiceGrid id={id} key={id} />;
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
