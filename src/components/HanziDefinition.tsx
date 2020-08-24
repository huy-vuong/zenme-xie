import PropTypes from 'prop-types';
import React from 'react';
import styles from 'zenme-xie/components/HanziDefinition.module.scss';

export default function HanziDefinition({ definition }: HanziDefinitionProp) {
  return <div className={styles.definition}>{definition}</div>;
}

interface HanziDefinitionProp {
  definition?: string;
}

HanziDefinition.propTypes = {
  definition: PropTypes.string,
};
