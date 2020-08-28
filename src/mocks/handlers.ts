import { rest } from 'msw';

export const handlers = [
  rest.get(
    'https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/%E8%B2%93.json',
    (_req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
          strokes: [
            'M 285 759 Q 246 708 139 631 Q 135 622 142 620 Q 145 621 155 626 Q 230 653 311 712 Q 348 736 383 750 Q 398 754 400 761 Q 401 771 389 780 Q 367 790 324 798 Q 308 802 297 798 Q 291 794 292 784 Q 295 771 285 759 Z',
            'M 128 546 Q 138 530 149 509 Q 156 496 170 493 Q 179 492 185 501 Q 192 511 191 537 Q 188 558 133 585 Q 123 591 116 590 Q 112 589 110 578 Q 111 568 128 546 Z',
            'M 227 632 Q 263 572 280 568 Q 290 565 298 579 Q 301 589 296 608 Q 281 639 235 653 Q 228 656 225 647 Q 222 640 227 632 Z',
            'M 243 466 Q 259 479 279 492 Q 385 570 407 590 Q 423 603 438 609 Q 451 613 453 621 Q 452 628 442 635 Q 417 656 392 663 Q 377 667 369 653 Q 336 569 117 420 Q 84 402 86 397 Q 86 394 93 395 Q 138 402 218 450 L 243 466 Z',
            'M 331 301 Q 352 223 319 116 Q 306 79 295 76 Q 286 72 212 82 Q 197 88 196 80 Q 195 73 206 60 Q 255 14 276 -18 Q 288 -37 303 -33 Q 322 -30 340 -5 Q 383 64 389 200 Q 380 297 363 335 Q 332 399 275 444 Q 256 460 243 466 C 217 481 195 470 218 450 Q 225 444 234 436 L 273 400 Q 288 384 300 365 L 331 301 Z',
            'M 234 436 Q 216 372 71 261 Q 56 251 75 252 Q 138 256 239 363 Q 240 366 243 367 Q 262 388 273 400 C 293 422 244 464 234 436 Z',
            'M 300 365 Q 249 239 79 104 Q 66 91 76 89 Q 97 80 165 125 Q 246 176 330 300 Q 330 301 331 301 C 349 325 312 393 300 365 Z',
            'M 582 561 Q 581 610 580 650 Q 583 669 563 676 Q 526 700 502 692 Q 484 685 498 664 Q 531 615 538 562 Q 538 558 539 552 L 543 519 Q 546 456 564 436 Q 577 424 582 436 Q 586 451 583 533 L 582 561 Z',
            'M 583 533 Q 590 537 601 540 Q 614 543 628 552 Q 634 556 632 563 Q 629 567 618 570 Q 602 567 582 561 L 539 552 Q 494 545 441 532 Q 410 531 393 528 Q 383 528 382 524 Q 381 517 387 509 Q 400 497 425 489 Q 441 482 456 487 Q 498 503 543 519 L 583 533 Z',
            'M 755 595 Q 782 677 815 734 Q 831 750 819 762 Q 806 781 768 800 Q 749 810 730 801 Q 720 794 728 782 Q 740 748 733 709 Q 715 618 668 489 Q 659 464 660 447 Q 663 432 678 441 Q 699 459 742 563 L 755 595 Z',
            'M 742 563 Q 760 560 837 567 Q 885 570 922 566 Q 935 565 940 573 Q 944 583 932 595 Q 890 629 808 606 Q 783 602 755 595 C 726 588 712 566 742 563 Z',
            'M 480 341 Q 470 348 442 353 Q 430 357 427 352 Q 420 348 428 331 Q 458 249 469 119 Q 470 79 489 52 Q 505 30 511 45 Q 514 52 515 62 L 517 96 Q 516 112 514 130 Q 496 263 492 307 C 489 336 489 336 480 341 Z',
            'M 735 84 Q 747 56 775 1 Q 784 -18 795 -16 Q 811 -12 821 15 Q 849 72 852 148 Q 858 194 862 250 Q 868 298 891 327 Q 907 346 896 360 Q 875 382 829 403 Q 810 413 778 403 Q 661 360 480 341 C 450 338 462 302 492 307 Q 495 307 600 328 L 640 336 Q 775 364 791 350 Q 800 346 799 324 Q 800 221 784 121 Q 783 103 775 102 Q 774 101 768 102 C 745 83 732 90 735 84 Z',
            'M 660 211 Q 694 218 726 222 Q 751 226 741 240 Q 729 255 703 259 Q 687 262 661 255 L 612 240 Q 575 228 543 218 Q 525 214 548 199 Q 557 192 575 196 Q 594 200 613 202 L 660 211 Z',
            'M 657 118 Q 658 167 660 211 L 661 255 Q 661 274 663 294 Q 669 315 640 336 C 616 354 592 357 600 328 Q 609 300 612 240 L 613 202 Q 613 165 615 110 C 616 80 656 88 657 118 Z',
            'M 515 62 Q 522 61 531 62 Q 597 75 735 84 C 765 86 781 87 768 102 Q 762 111 742 124 Q 724 134 657 118 L 615 110 Q 563 103 517 96 C 487 92 485 64 515 62 Z',
          ],
          medians: [
            [
              [390, 764],
              [325, 760],
              [264, 705],
              [194, 655],
              [159, 634],
              [149, 634],
              [147, 627],
            ],
            [
              [119, 581],
              [166, 532],
              [171, 508],
            ],
            [
              [236, 641],
              [268, 610],
              [283, 582],
            ],
            [
              [445, 621],
              [395, 625],
              [349, 575],
              [278, 513],
              [186, 448],
              [90, 398],
            ],
            [
              [226, 451],
              [243, 449],
              [271, 426],
              [320, 371],
              [355, 292],
              [362, 189],
              [341, 82],
              [330, 58],
              [308, 32],
              [302, 28],
              [287, 34],
              [203, 77],
            ],
            [
              [237, 430],
              [242, 399],
              [204, 352],
              [139, 295],
              [79, 259],
            ],
            [
              [301, 358],
              [300, 303],
              [225, 205],
              [146, 134],
              [81, 96],
            ],
            [
              [507, 677],
              [547, 647],
              [559, 584],
              [565, 478],
              [573, 439],
            ],
            [
              [390, 518],
              [445, 508],
              [622, 560],
            ],
            [
              [736, 791],
              [754, 780],
              [776, 747],
              [718, 560],
              [670, 447],
            ],
            [
              [746, 567],
              [779, 582],
              [857, 592],
              [896, 590],
              [930, 578],
            ],
            [
              [435, 344],
              [459, 321],
              [466, 300],
              [501, 51],
            ],
            [
              [489, 338],
              [505, 326],
              [584, 336],
              [609, 346],
              [651, 350],
              [780, 379],
              [809, 376],
              [835, 356],
              [844, 342],
              [814, 98],
              [793, 61],
              [794, -1],
            ],
            [
              [545, 208],
              [686, 238],
              [731, 233],
            ],
            [
              [608, 325],
              [635, 301],
              [636, 143],
              [621, 119],
            ],
            [
              [519, 67],
              [540, 82],
              [691, 104],
              [761, 102],
            ],
          ],
          radStrokes: [0, 1, 2, 3, 4, 5, 6],
        })
      );
    }
  ),
  rest.get('/characters/35987.json', (_req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        character: '貓',
        definition: 'cat',
        pinyin: ['māo'],
        decomposition: '⿰豸苗',
        etymology: {
          type: 'pictophonetic',
          phonetic: '苗',
          semantic: '豸',
          hint: 'badger',
        },
        radical: '豸',
        matches: [
          [0],
          [0],
          [0],
          [0],
          [0],
          [0],
          [0],
          [1],
          [1],
          [1],
          [1],
          [1],
          [1],
          [1],
          [1],
          [1],
        ],
      })
    );
  }),
];
