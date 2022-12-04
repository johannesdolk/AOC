(() => {
  const fs = require('fs');
  const tuples = fs.readFileSync(process.argv[2]).toString().split('\n').filter(d => d.length > 0).map(d => d.split(',').map(t => t.split('-').map(y => parseInt(y))));
  let count = 0;
  if(process.env.part === 'part1') {
    for(const [one, two] of tuples) {
      if(one[0] >= two[0] && one[1] <= two[1]) {
        count++;
      } else if (two[0] >= one[0] && two[1] <= one[1]) {
        count++;
      }
    }
  } else {
    for(const [one, two] of tuples) {
      if(one[0] === two[0] || one[0] === two[1] || one[1] === two[1] || one[1] === two[0]) {
        count++;
      } else if (one[0] < two[0] && one[1] > two[0] || one[0] > two[0] && one[0] < two[1]) {
        count++;
      }
    }
  }
  console.error(count);
})();