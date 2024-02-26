export const generateDiceData = (triesCount) => {
    const diceData = [];
  
    for (let i = 0; i < triesCount; i++) {
        diceData.push(getDiceValue() + getDiceValue());
    }
    return diceData;
}

const getDiceValue = () => (Math.floor(Math.random() * 6) + 1);

export const getDiceDataset = (count) => {
    const data = {};
    generateDiceData(count).forEach(item => {
      data[item] = (data[item] || 0) + 1;
    });
    return (
      Object.keys(data).map(item => ({
        number: parseInt(item), count: data[item]
      }))
    )
}

export const getPopularResults = (diceData) => {
    const result = diceData.reduce((acc, item) => acc[0]?.count > item.count ? acc : acc[0]?.count === item.count ? [...acc, item] : [item], []);
    return result.map(item => item.number).join(', ');
  }

  