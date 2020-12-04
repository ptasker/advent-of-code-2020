const fs = require('fs');

async function getData() {
  const data = await fs.readFileSync('./data.txt', 'utf8');
  const splitData = data.split('\n');
  return splitData;
}
function handleData() {
  return getData().then(data => {
     let count = 0;
    data.forEach((item, index)=>{
      const rowData = item.split(' ');
      if(item.length === 0){
        return;
      }

      const minMaX = rowData[0].split('-');

      const min = minMaX[0];
      const max = minMaX[1];
      const char = rowData[1][0];
      const password = rowData[2];

      //Step 1 check if password has char
      if(-1 === password.indexOf(char)){
        return false;
      }

      /** STEP 1 **/

      /*
      let letterCount = 0;
      //check if char appears the right amount of times
      for(let i =0; i< password.length; i++){
        if(password[i] === char){
          letterCount++;
        }
      }

      if(letterCount >= min && letterCount <= max){
        count++;
      }

      */

      /** STEP 2 **/
      const minChar = password[parseInt(min)-1];
      const maxChar =  password[parseInt(max)-1]

      if( minChar === char && maxChar !== char
          || maxChar === char && minChar !== char){
        count++
      }

      return false;
    })

    return count;
  })
}

(async () => {
  const data = await handleData()
  console.log(data)

})();
