import axios from 'axios';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
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

export default function HanziCard({ character, index }: HanziCardProp) {
  const [
    characterDictionaryEntry,
    setCharacterDictionaryEntry,
  ] = useState<HanziDictionaryEntry | null>(null);
  useEffect(() => {
    // TODO Also block the call if the given character is not a Hanzi character.
    if (!characterDictionaryEntry) {
      axios
        .get(`/characters/${character.charCodeAt(0)}.json`)
        .then((response) => {
          try {
            setCharacterDictionaryEntry(response.data);
          } catch (err) {
            console.log(`Promise Resolved: ${err}: ${response.data}`);
          }
        })
        .catch((err) => {
          console.log(`Promise Rejected: ${err}`);
        });
    }
  });
  return (
    <Card className={styles.hanziCard}>
      <Card.Body>
        <Card.Title>{index + 1}</Card.Title>
        <Card.Title>{character}</Card.Title>
        <Container>
          <Row className="justify-content-md-center">
            <Col lg={4} md={12}>
              <div className={styles.hanziGrid}>
                {
                  <HanziGrid
                    character={character}
                    id={`hanzi-grid-${index}-${character.charCodeAt(0)}`}
                    delayBetweenStrokes={250}
                    radicalColor="#dc3545"
                    animateOnClick={true}
                  />
                }
              </div>
              {characterDictionaryEntry?.pinyin ? <br /> : null}
              <PinyinList
                id={`hanzi-grid-${index}-${character.charCodeAt(0)}`}
                pinyinList={characterDictionaryEntry?.pinyin}
              />
              {characterDictionaryEntry?.definition ? <br /> : null}
              <HanziDefinition
                definition={characterDictionaryEntry?.definition}
              />
            </Col>
            <Col lg={8} md={12}>
              <div className="d-xl-none d-lg-none">
                <br />
              </div>
              <HanziSteps
                character={character}
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
  index: number;
}

HanziCard.propTypes = {
  character: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};
