import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import HanziGrid from 'zenme-xie/HanziGrid';

export default function HanziCard({ character, index }: HanziCardProp) {
  return (
    <Card className="hanzi-card">
      <Card.Body>
        <Card.Title>{index + 1}</Card.Title>
        <Card.Title>{character}</Card.Title>
        <Container>
          <Row className="justify-content-md-center">
            <Col>
              <div className="hanzi-animation">
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
