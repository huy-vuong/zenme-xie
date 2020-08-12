import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import HanziCardList from './HanziCardList';

export default function App() {
  const [text, setText] = useState('貓咪喵喵叫');
  return (
    <div className="App">
      <Navbar bg="danger" variant="dark" fixed="top">
        <Navbar.Brand href="/">怎麼寫</Navbar.Brand>
        <FormControl
          type="text"
          size="lg"
          value={text}
          placeholder="你想寫什麼？"
          onChange={(e) => setText(e.target.value ?? '')}
        />
      </Navbar>
      <Container>
        <Row>
          <Col>
            <div>
              <Navbar bg="danger">
                <Navbar.Brand>Zěnme Xiě</Navbar.Brand>
              </Navbar>
              <HanziCardList text={text} />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
