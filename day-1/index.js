const fs = require('fs');

/*
Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.
 */
async function getData() {
  const data = await fs.readFileSync('./data.txt', 'utf8');
  const splitData = data.split('\n');
  return splitData;
}

//Part 1
function handleDataPt1() {
  return getData().then(data => {
    const copy = [...data];
    let result = [];
    data.forEach((item, index) => {
      const computed = 2020 - parseInt(item);
      if (copy.includes(computed.toString())) {
        result.push(index)
      }
    });

    return copy[result[0]] * copy[result[1]];
  })
}

function handleDataPt2() {
  return getData().then(data => {
    let allSums = [];
    let result = [];

    data.forEach((item) => {
      data.forEach((itemInner) => {
        const value = parseInt(item) + parseInt(itemInner);
        if(!allSums.includes(value)){
          allSums.push(
            value
          )
        }
      });
    });

    allSums.forEach((item, index) => {
      const computed = 2020 - parseInt(item);
      if (data.includes(computed.toString())) {
        result.push(computed)
      }
    });

    return result[0] * result[1] * result[2];
  })
}

(async () => {
  const data = await handleDataPt1()
  console.log(data)

  const dataPt2 = await handleDataPt2()

  console.log(dataPt2);
})();
