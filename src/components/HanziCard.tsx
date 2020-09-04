import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from 'zenme-xie/components/HanziCard.module.scss';
import HanziDefinition from 'zenme-xie/components/HanziDefinition';
import HanziGrid from 'zenme-xie/components/HanziGrid';
import HanziSteps from 'zenme-xie/components/HanziSteps';
import PinyinList from 'zenme-xie/components/PinyinList';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';

export default function HanziCard({
  character,
  dictionaryEntry,
  graphicsEntry,
  index,
}: HanziCardProp) {
  return (
    <Card className={styles.hanziCard}>
      <Card.Body>
        <Card.Title>{index + 1}</Card.Title>
        <Card.Title>{character}</Card.Title>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={4} md={12}>
              <div
                className={styles.hanziGrid}
                key={`hanzi-grid-${index}-${character.charCodeAt(0)}`}
              >
                <HanziGrid
                  character={character}
                  id={`hanzi-grid-${index}-${character.charCodeAt(0)}`}
                  delayBetweenStrokes={250}
                  radicalColor="#dc3545"
                  animateOnClick={true}
                />
              </div>
              {dictionaryEntry?.pinyin ? <br /> : null}
              <PinyinList
                id={`pinyin-list-${index}-${character.charCodeAt(0)}`}
                pinyinList={dictionaryEntry?.pinyin}
              />
              {dictionaryEntry?.definition ? <br /> : null}
              <HanziDefinition definition={dictionaryEntry?.definition} />
            </Col>
            <Col
              lg={8}
              md={12}
              key={`col-hanzi-steps-${index}-${character.charCodeAt(0)}`}
            >
              <div className="d-xl-none d-lg-none">
                <br />
              </div>
              <HanziSteps
                graphicsEntry={graphicsEntry}
                id={`hanzi-steps-${index}-${character.charCodeAt(0)}`}
                activeStrokeColor="#dc3545"
              />
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <br />
      </Card.Body>
    </Card>
  );
}

interface HanziCardProp {
  character: string;
  dictionaryEntry: HanziDictionaryEntry | null;
  graphicsEntry: HanziGraphicsEntry | null;
  index: number;
}

HanziCard.propTypes = {
  character: PropTypes.string.isRequired,
  dictionaryEntry: PropTypes.shape({
    character: PropTypes.string,
    definition: PropTypes.string,
    pinyin: PropTypes.arrayOf(PropTypes.string),
  }),
  graphicsEntry: PropTypes.shape({
    character: PropTypes.string,
    strokes: PropTypes.arrayOf(PropTypes.string),
    medians: PropTypes.arrayOf(
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number))
    ),
    radStrokes: PropTypes.arrayOf(PropTypes.number),
  }),
  index: PropTypes.number.isRequired,
};
