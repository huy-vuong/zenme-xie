import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import RiceGrid from './RiceGrid';

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
  function isHanzi(char: string) {
    return Boolean(
      char.match(
        /^([\u4E00-\u9FCC\u3400-\u4DB5\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\ud840-\ud868][\udc00-\udfff]|\ud869[\udc00-\uded6\udf00-\udfff]|[\ud86a-\ud86c][\udc00-\udfff]|\ud86d[\udc00-\udf34\udf40-\udfff]|\ud86e[\udc00-\udc1d])+$/g
      )
    );
  }
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
