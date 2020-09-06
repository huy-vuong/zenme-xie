import opencc from 'node-opencc';
import React, { useContext, useState } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import FormControl from 'react-bootstrap/FormControl';
import styles from 'zenme-xie/components/HanziTextInput.module.scss';
import ThemeContext from 'zenme-xie/components/ThemeContext';
import { Theme } from 'zenme-xie/types/Context';

enum CharSet {
  None,
  Traditional,
  Simplified,
}

export default function HanziTextInput({ text, setText }: HanziTextInputProp) {
  const theme = useContext(ThemeContext);
  const [charSet, setCharSet] = useState(CharSet.None);
  const defaultVariant = theme === Theme.Light ? 'light' : 'dark';
  const activeVariant =
    theme === Theme.Light ? 'outline-light' : 'outline-dark';
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
          variant={
            charSet === CharSet.Traditional ? defaultVariant : activeVariant
          }
          onClick={async () => {
            setCharSet(CharSet.Traditional);
            setText(opencc.simplifiedToTraditional(text));
          }}
        >
          T
        </Button>
        <Button
          variant={
            charSet === CharSet.Simplified ? defaultVariant : activeVariant
          }
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
