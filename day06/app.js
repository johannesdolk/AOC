(() => {
  const fs = require('fs');
  const data = Array.from(fs.readFileSync(process.argv[2]).toString().trim());
  const dataCpy = [...data];
  const breakPoint = process.env.part === 'part1' ? 4 : 14;
  for(let i = breakPoint -1; i < data.length; i++) {
    if(new Set(dataCpy.slice(i-breakPoint,i)).size === breakPoint) {
      console.error(i);
      break;
    }
  }
})();