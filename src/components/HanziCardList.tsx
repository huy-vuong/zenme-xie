import PropTypes from 'prop-types';
import React from 'react';
import HanziCard from 'zenme-xie/components/HanziCard';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';

export default function HanziCardList({
  text,
  dictionary,
  graphics,
}: HanziCardListProp) {
  return (
    <>
      {text.split('').map((character, index) => (
        <div
          data-testid={`hanzi-card-${index}-${character.charCodeAt(0)}`}
          key={`hanzi-card-${index}-${character.charCodeAt(0)}`}
        >
          <HanziCard
            character={character}
            dictionaryEntry={dictionary.get(character) ?? null}
            graphicsEntry={graphics.get(character) ?? null}
            index={index}
          />
        </div>
      ))}
    </>
  );
}

interface HanziCardListProp {
  text: string;
  dictionary: Map<string, HanziDictionaryEntry | null>;
  graphics: Map<string, HanziGraphicsEntry | null>;
}

HanziCardList.propTypes = {
  text: PropTypes.string.isRequired,
  dictionary: PropTypes.objectOf(
    PropTypes.shape({
      character: PropTypes.string,
      definition: PropTypes.string,
      pinyin: PropTypes.arrayOf(PropTypes.string),
    })
  ),
  graphics: PropTypes.objectOf(
    PropTypes.shape({
      character: PropTypes.string,
      strokes: PropTypes.arrayOf(PropTypes.string),
      medians: PropTypes.arrayOf(
        PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
      ),
      radStrokes: PropTypes.arrayOf(PropTypes.number),
    })
  ),
};
