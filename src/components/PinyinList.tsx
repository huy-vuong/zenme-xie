import _ from 'lodash';
import PropTypes from 'prop-types';
import React from 'react';
import styles from 'zenme-xie/components/PinyinList.module.scss';

export default function PinyinList({ id, pinyinList }: PinyinListProp) {
  return (
    <div className={styles.pinyinList}>
      {_.initial(
        pinyinList?.flatMap(
          (pinyin, pinyinIndex) => [
            <code
              id={`${id}-${pinyinIndex}`}
              className={styles.pinyin}
              key={`${id}-${pinyinIndex}`}
            >
              {pinyin}
            </code>,
            <span
              className={styles.pinyinSeparator}
              key={`${id}-separator-${pinyinIndex}`}
            >
              &nbsp;•&nbsp;
            </span>,
          ],
          1
        )
      )}
    </div>
  );
}

interface PinyinListProp {
  id: string;
  pinyinList?: Array<string>;
}

PinyinList.propTypes = {
  id: PropTypes.string.isRequired,
  pinyinList: PropTypes.arrayOf(PropTypes.string.isRequired),
};
