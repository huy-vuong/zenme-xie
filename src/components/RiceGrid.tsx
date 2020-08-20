import PropTypes from 'prop-types';
import React from 'react';
import styles from 'zenme-xie/components/RiceGrid.module.scss';

export default function RiceGrid({ id, size = 300, className }: RiceGridProp) {
  const halfSize = size / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      id={id}
      className={className}
    >
      <line
        x1="0"
        y1="0"
        x2={size}
        y2={size}
        className={styles.guideLine}
        data-testid="rice-grid-guide-nw-se"
      />
      <line
        x1={size}
        y1="0"
        x2="0"
        y2={size}
        className={styles.guideLine}
        data-testid="rice-grid-guide-ne-sw"
      />
      <line
        x1={halfSize}
        y1="0"
        x2={halfSize}
        y2={size}
        className={styles.guideLine}
        data-testid="rice-grid-guide-nn-ss"
      />
      <line
        x1="0"
        y1={halfSize}
        x2={size}
        y2={halfSize}
        className={styles.guideLine}
        data-testid="rice-grid-guide-ww-ee"
      />
      <line
        x1="0"
        y1="0"
        x2={size}
        y2="0"
        className={styles.borderLine}
        data-testid="rice-grid-border-nw-ne"
      />
      <line
        x1="0"
        y1="0"
        x2="0"
        y2={size}
        className={styles.borderLine}
        data-testid="rice-grid-border-nw-sw"
      />
      <line
        x1={size}
        y1="0"
        x2={size}
        y2={size}
        className={styles.borderLine}
        data-testid="rice-grid-border-ne-se"
      />
      <line
        x1="0"
        y1={size}
        x2={size}
        y2={size}
        className={styles.borderLine}
        data-testid="rice-grid-border-sw-se"
      />
    </svg>
  );
}

interface RiceGridProp {
  id: string;
  size?: number;
  className?: string;
}

RiceGrid.propTypes = {
  id: PropTypes.string.isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};
