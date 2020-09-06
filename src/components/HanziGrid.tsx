import HanziWriter from 'hanzi-writer';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import RiceGrid from 'zenme-xie/components/RiceGrid';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';
import { isHanzi } from 'zenme-xie/utils/hanzi';

export default function HanziGrid({
  character,
  dictionaryEntry,
  graphicsEntry,
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
    if (
      !strokeRenderStarted &&
      isHanzi(character) &&
      dictionaryEntry &&
      graphicsEntry
    ) {
      setStrokeRenderStarted(true);
      const writer = HanziWriter.create(id, character, {
        width: size,
        height: size,
        strokeColor: strokeColor ?? defaultStrokeColor,
        delayBetweenStrokes,
        radicalColor,
        outlineColor: outlineColor ?? defaultOutlineColor,
        charDataLoader: () =>
          Object.assign(graphicsEntry, {
            radStrokes: dictionaryEntry.matches
              .map((value, index) => (value && value[0] === 0 ? index : null))
              .filter((value) => value !== null),
          }),
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
    dictionaryEntry,
    graphicsEntry,
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
  dictionaryEntry: HanziDictionaryEntry | null;
  graphicsEntry: HanziGraphicsEntry | null;
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
  dictionaryEntry: PropTypes.shape({
    character: PropTypes.string,
    definition: PropTypes.string,
    pinyin: PropTypes.arrayOf(PropTypes.string),
    matches: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
  }),
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
  delayBetweenStrokes: PropTypes.number,
  strokeColor: PropTypes.string,
  radicalColor: PropTypes.string,
  outlineColor: PropTypes.string,
  animateOnClick: PropTypes.bool,
};
