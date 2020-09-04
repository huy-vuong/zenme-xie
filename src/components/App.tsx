import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import HanziCardList from 'zenme-xie/components/HanziCardList';
import HanziTextInput from 'zenme-xie/components/HanziTextInput';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';
import HanziGraphicsEntry from 'zenme-xie/types/HanziGraphicsEntry';
import { isHanzi } from 'zenme-xie/utils/hanzi';

export default function App() {
  const [text, setText] = useState('貓咪喵喵叫');
  const [prevText, setPrevText] = useState('');
  const [dictionary, setDictionary] = useState(
    new Map<string, HanziDictionaryEntry | null>()
  );
  const [graphics, setGraphics] = useState(
    new Map<string, HanziGraphicsEntry | null>()
  );
  useEffect(() => {
    function loadDictionary(characters: Array<string>) {
      return Promise.all(
        characters.map((character: string) =>
          axios
            .get(`dictionary/${character.charCodeAt(0)}.json`)
            .then((response) => response.data)
            .catch((err) => {
              console.error(`Promise Rejected: ${err}`);
              return null;
            })
        )
      ).then((dictionaryEntries: Array<HanziDictionaryEntry | null>) => {
        setDictionary(
          dictionaryEntries
            .filter((entry) => entry)
            .reduce(
              (acc, val) => (val ? new Map(acc).set(val.character, val) : acc),
              dictionary
            )
        );
      });
    }
    function loadGraphics(characters: Array<string>) {
      return Promise.all(
        characters.map((character: string) =>
          axios
            .get(`graphics/${character.charCodeAt(0)}.json`)
            .then((response) => response.data)
            .catch((err) => {
              console.error(`Promise Rejected: ${err}`);
              return null;
            })
        )
      ).then((graphicsEntries: Array<HanziGraphicsEntry | null>) => {
        setGraphics(
          graphicsEntries
            .filter((entry) => entry)
            .reduce(
              (acc, val) => (val ? new Map(acc).set(val.character, val) : acc),
              graphics
            )
        );
      });
    }
    if (prevText !== text) {
      setPrevText(text);
      const newCharacters = _.uniq(Array.from(text)).filter(
        (character) => !dictionary.has(character) && isHanzi(character)
      );
      if (!_.isEmpty(newCharacters)) {
        newCharacters.forEach((character) => {
          setDictionary(dictionary.set(character, null));
        });
        loadDictionary(newCharacters);
        loadGraphics(newCharacters);
      }
    }
  }, [prevText, text, dictionary, graphics]);
  return (
    <div className="App">
      <Navbar bg="danger" variant="dark" fixed="top">
        <Navbar.Brand href="/">怎麼寫</Navbar.Brand>
        <HanziTextInput
          text={text}
          setText={(text) => {
            setText(text);
          }}
        />
      </Navbar>
      <Container>
        <Row>
          <Col>
            <Navbar bg="danger">
              <Navbar.Brand>Zěnme Xiě</Navbar.Brand>
            </Navbar>
            <HanziCardList
              text={text}
              dictionary={dictionary}
              graphics={graphics}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
