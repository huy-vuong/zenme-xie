export default interface HanziGraphicsEntry {
  character: string;
  strokes: Array<string>;
  medians: Array<Array<Array<number>>>;
  radStrokes: Array<number>;
}
