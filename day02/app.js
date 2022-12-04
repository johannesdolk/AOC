const { off } = require('process');

(() => {
  const fs = require('fs');
  const data = fs.readFileSync(process.argv[2]).toString().trim().split('\n').map(d => d.split(' '));

  console.time('eee')
  let score = 0;
  if(process.env.part == 'part1') {
    for(const [first, second] of data) {
      if(first === 'A') {
        if(second === 'X') {
          score += 4;
        } else {
          second === 'Y' ? score += 8 : score += 3;
        }
      } else if(first === 'B') {
        if(second === 'X') {
          score += 1;
        } else {
          second === 'Y' ? score += 5 : score += 9;
        }
      } else {
          if(second === 'X') {
            score += 7;
          } else {
            second === 'Y' ? score += 2 : score += 6;
          }
      }
    }
  } else {
    for(const [first, second] of data) {
      if(second === 'X') {
        if(first === 'A') {
          score += 3;
        } else {
          first === 'B' ? score += 1 : score += 2;
        }
      } else if(second === 'Y') {
        if(first === 'A') {
          score += 4;
        } else {
          first === 'B' ? score += 5 : score += 6;
        }
      } else if(second === 'Z') {
        if(first === 'A') {
          score += 8;
        } else {
          first === 'B' ? score += 9 : score += 7;
        }
      }
  }
}
console.error(score);
})();