import { render } from '@testing-library/react';
import React from 'react';
import HanziStep from 'zenme-xie/HanziStep';

test('renders up to the stroke index given Hanzi character data', () => {
  const strokeIndex = 1;
  const { container, asFragment } = render(
    <HanziStep
      characterData={characterData}
      strokeIndex={strokeIndex}
      id="test"
    />
  );
  const gElements = container.querySelectorAll('path');
  expect(gElements).toHaveLength(strokeIndex + 1);
  expect(asFragment()).toMatchSnapshot();
});

test('renders the active stroke a different color', () => {
  const strokeIndex = 2;
  const { asFragment } = render(
    <HanziStep
      characterData={characterData}
      strokeIndex={strokeIndex}
      id="test"
      activeStrokeColor="#dc3545"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

test('renders an empty rice grid given no character data', () => {
  const { asFragment } = render(
    <HanziStep
      characterData={{ strokes: [], medians: [], radStrokes: [] }}
      strokeIndex={0}
      id="test"
    />
  );
  expect(asFragment()).toMatchSnapshot();
});

// 什
const characterData = {
  strokes: [
    'M 266 534 Q 309 589 356 661 Q 384 712 411 735 Q 421 747 417 763 Q 413 778 381 804 Q 350 825 329 825 Q 308 824 317 798 Q 332 764 318 736 Q 278 640 216 553 Q 158 468 76 375 Q 64 363 62 356 Q 58 343 74 346 Q 119 356 223 483 Q 230 493 240 502 L 266 534 Z',
    'M 240 502 Q 261 433 262 403 Q 255 265 251 241 Q 244 189 229 135 Q 214 86 251 38 Q 252 35 256 32 Q 275 16 287 44 Q 302 86 302 134 Q 308 387 318 445 Q 325 473 315 484 Q 297 506 283 520 Q 276 529 266 534 C 242 552 231 531 240 502 Z',
    'M 676 454 Q 755 464 874 468 Q 934 468 941 479 Q 945 492 928 505 Q 865 548 817 529 Q 760 516 677 498 L 622 488 Q 511 469 384 447 Q 362 444 379 427 Q 412 400 452 409 Q 530 433 622 446 L 676 454 Z',
    'M 622 446 Q 622 233 618 163 Q 615 -26 636 -56 Q 651 -72 660 -50 Q 675 -14 676 454 L 677 498 Q 678 640 684 714 Q 685 748 703 778 Q 710 794 689 811 Q 664 830 619 842 Q 598 848 585 833 Q 575 824 588 812 Q 619 787 621 750 Q 622 657 622 488 L 622 446 Z',
  ],
  medians: [
    [
      [329, 809],
      [348, 793],
      [368, 756],
      [325, 671],
      [250, 555],
      [184, 469],
      [122, 398],
      [72, 356],
    ],
    [
      [267, 525],
      [269, 496],
      [286, 465],
      [288, 410],
      [279, 239],
      [262, 94],
      [268, 41],
    ],
    [
      [381, 437],
      [441, 432],
      [604, 465],
      [840, 501],
      [893, 496],
      [932, 485],
    ],
    [
      [593, 823],
      [621, 816],
      [645, 797],
      [658, 775],
      [649, 572],
      [650, 306],
      [643, 79],
      [647, -50],
    ],
  ],
  radStrokes: [0, 1],
};
