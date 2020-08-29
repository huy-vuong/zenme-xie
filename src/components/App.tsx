import axios from 'axios';
import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import HanziCardList from 'zenme-xie/components/HanziCardList';
import HanziDictionaryEntry from 'zenme-xie/types/HanziDictionaryEntry';
import { isHanzi } from 'zenme-xie/utils/hanzi';

export default function App() {
  const [text, setText] = useState('貓咪喵喵叫');
  const [prevText, setPrevText] = useState('');
  const [dictionary, setDictionary] = useState<
    Map<string, HanziDictionaryEntry | null>
  >(new Map());
  useEffect(() => {
    if (prevText !== text) {
      setPrevText(text);
      const newCharacters = _.uniq(Array.from(text)).filter(
        (character) => !dictionary.has(character)
      );
      if (newCharacters.length > 0) {
        newCharacters.forEach((character) => {
          setDictionary(dictionary.set(character, null));
        });
        Promise.all(
          newCharacters.map((character) => {
            if (isHanzi(character)) {
              return axios
                .get(`characters/${character.charCodeAt(0)}.json`)
                .then((response) => response.data)
                .catch((err) => {
                  console.log(`Promise Rejected: ${err}`);
                  return null;
                });
            }
            return new Promise<HanziDictionaryEntry | null>((resolve) =>
              resolve(null)
            );
          })
        ).then((dictionaryEntries: Array<HanziDictionaryEntry | null>) => {
          setDictionary(
            dictionaryEntries
              .filter((entry) => entry)
              .reduce(
                (accumulator, currentValue) =>
                  currentValue
                    ? new Map(accumulator).set(
                        currentValue.character,
                        currentValue
                      )
                    : accumulator,
                dictionary
              )
          );
        });
      }
    }
  }, [prevText, text, dictionary]);
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
            <Navbar bg="danger">
              <Navbar.Brand>Zěnme Xiě</Navbar.Brand>
            </Navbar>
            {<HanziCardList text={text} dictionary={dictionary} />}
          </Col>
        </Row>
      </Container>
    </div>
  );
}
