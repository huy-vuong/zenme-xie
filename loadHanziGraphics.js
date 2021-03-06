const axios = require('axios');
const fsPromises = require('fs/promises');

async function loadHanziGraphics() {
  const response = await axios.get(
    'https://raw.githubusercontent.com/skishore/makemeahanzi/master/graphics.txt'
  );
  await Promise.all(
    response.data
      .split('\n')
      .filter((line) => line.trim())
      .map((line) => {
        try {
          const data = JSON.parse(line);
          return {
            characterCode: data.character.charCodeAt(0),
            data,
          };
        } catch (err) {
          console.error(line);
          return {
            characterCode: -1,
            data: {},
          };
        }
      })
      .map(async (entry) => {
        if (entry.characterCode !== -1) {
          await fsPromises.writeFile(
            `public/graphics/${entry.characterCode}.json`,
            JSON.stringify(entry.data)
          );
        }
      })
  );
}

loadHanziGraphics().then(() => {});
