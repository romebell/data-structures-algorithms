function fileFinder(dir, target) {
  if (dir[target] === null) return true;

  if (dir[target] !== null) {
    for (let [key, value] of Object.entries(dir)) {
      fileFinder(key, target);
    }
  } else {
    return false;
  }
}



let desktop = {
    '/images': {
        'app_academy_logo.svg': null,
        '/parks': {
            'yosemite.jpeg': null,
            'acadia.jpeg': null,
            'yellowstone.png': null
        },
        '/pets': {
            'trixie_lou.jpeg': null,
            'rolo.jpeg': null,
            'opal.jpeg': null,
            'diana.jpeg': null,
        }
    },
    '/music': {
        'hey_programmers.mp3': null,
        '/genres': {
            '/rock': {
                'everlong.flac': null,
                'livin_on_a_prayer.mp3': null
            },
            '/hip_hop': {
                'express_yourself.wav': null,
                'ny_state_of_mind.mp3': null
            }
        }
    }
};

function consecutive(num) {
  if (num <= 4) return 0;
  let start = 1;
  let i = 1;
  let play = 0;
  let result = 0;

  while (i < num) {
      if (play < num) {
          play += i;
          i++;
      } else if (play > num) {
          play = 0;
          start += 1;
          i = start;
      } else {
          result += 1;
          play = 0;
          start += 1;
          i = start;
      }
  }
  return result;
}

function bonus(bigNum) {
  let result = 0;
  let stringNum = String(bigNum);
  let arr = stringNum.split('');

  while (arr.length > 2) {
      if (arr[arr.length - 1] === '0') {
          bigNum = bigNum / 10;
          array.pop();
          bonus += 1;
      }
      if (arr[arr.length - 1] !== '0') break;
  }
  return arr[arr.length - 1] === '0' ? result : result * 2;
}

