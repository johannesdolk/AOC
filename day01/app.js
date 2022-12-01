(() => {
  const fs = require('fs'); let index = 0; const data = fs.readFileSync(process.argv[2]).toString().split('\n').reduce((acc, curr) => {if(curr === ''){index++;acc[index] = 0} else {acc[index] = parseInt(curr,10) + acc[index];}return acc;},[0]).sort((a,b) => {if(a > b) {return -1} return 1});
  if(process.env.part === 'part1') {
    console.error(data[0]);
  } else {
    console.error(data.splice(0,3).reduce((acc,curr) => acc + curr, 0));
  }
})();