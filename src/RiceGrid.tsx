import PropTypes from 'prop-types';
import React from 'react';

export default function RiceGrid({ id, size = 300 }: RiceGridProp) {
  const halfSize = size / 2;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        id={id}
      >
        <line
          x1="0"
          y1="0"
          x2={size}
          y2="0"
          className="rice-grid-border"
          data-testid="rice-grid-border-nw-ne"
        />
        <line
          x1="0"
          y1="0"
          x2="0"
          y2={size}
          className="rice-grid-border"
          data-testid="rice-grid-border-nw-sw"
        />
        <line
          x1={size}
          y1="0"
          x2={size}
          y2={size}
          className="rice-grid-border"
          data-testid="rice-grid-border-ne-se"
        />
        <line
          x1="0"
          y1={size}
          x2={size}
          y2={size}
          className="rice-grid-border"
          data-testid="rice-grid-border-sw-se"
        />
        <line
          x1="0"
          y1="0"
          x2={size}
          y2={size}
          className="rice-grid-guide"
          data-testid="rice-grid-guide-nw-se"
        />
        <line
          x1={size}
          y1="0"
          x2="0"
          y2={size}
          className="rice-grid-guide"
          data-testid="rice-grid-guide-ne-sw"
        />
        <line
          x1={halfSize}
          y1="0"
          x2={halfSize}
          y2={size}
          className="rice-grid-guide"
          data-testid="rice-grid-guide-nn-ss"
        />
        <line
          x1="0"
          y1={halfSize}
          x2={size}
          y2={halfSize}
          className="rice-grid-guide"
          data-testid="rice-grid-guide-ww-ee"
        />
      </svg>
    </div>
  );
}

interface RiceGridProp {
  id: string;
  size?: number;
}

RiceGrid.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
};
