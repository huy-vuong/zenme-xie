import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styles from 'zenme-xie/HanziCard.module.scss';
import HanziGrid from 'zenme-xie/HanziGrid';
import HanziSteps from 'zenme-xie/HanziSteps';

export default function HanziCard({ character, index }: HanziCardProp) {
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
