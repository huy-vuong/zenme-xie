import PropTypes from 'prop-types';
import React from 'react';
import HanziCard from 'zenme-xie/HanziCard';

export default function HanziCardList({ text }: HanziCardListProp) {
  return (
    <div>
      {text.split('').map((character, index) => (
        <div
          data-testid={`hanzi-card-${index}-${character.charCodeAt(0)}`}
          key={`hanzi-card-${index}-${character.charCodeAt(0)}`}
        >
          <HanziCard character={character} index={index} />
        </div>
      ))}
    </div>
  );
}

interface HanziCardListProp {
  text: string;
}

HanziCardList.propTypes = {
  text: PropTypes.string.isRequired,
};
