export default interface CharacterData {
  character: string;
  definition: string;
  pinyin: Array<string>;
  matches: Array<Array<number>>;
}
