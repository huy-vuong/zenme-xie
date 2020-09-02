import opencc from 'node-opencc';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from 'zenme-xie/components/HanziTextInput.module.scss';

enum CharSet {
  None,
  Traditional,
  Simplified,
}

export default function HanziTextInput({ text, setText }: HanziTextInputProp) {
  const [charSet, setCharSet] = useState(CharSet.None);
  return (
    <div className={styles.textInputGroup}>
      <FormControl
        type="text"
        size="lg"
        value={text}
        placeholder="你想寫什麼？"
        onChange={(e) => {
          setCharSet(CharSet.None);
          setText(e.target.value ?? '');
        }}
        className={styles.textInput}
      />
      <ButtonGroup size="lg">
        &nbsp;
        <Button
          variant={charSet === CharSet.Traditional ? 'light' : 'outline-light'}
          onClick={async () => {
            setCharSet(CharSet.Traditional);
            setText(opencc.simplifiedToTraditional(text));
          }}
        >
          T
        </Button>
        <Button
          variant={charSet === CharSet.Simplified ? 'light' : 'outline-light'}
          onClick={async () => {
            setCharSet(CharSet.Simplified);
            setText(opencc.traditionalToSimplified(text));
          }}
        >
          S
        </Button>
      </ButtonGroup>
    </div>
  );
}

interface HanziTextInputProp {
  text: string;
  setText: (text: string) => any;
}
