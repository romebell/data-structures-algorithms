function lucasNumber(n) {
  if (n === 0) return 2;
  if (n === 1) return 1;

  return lucasNumber(n - 1) + lucasNumber(n - 2);
}

function sumArray(array) {
  if (array.length === 0) return 0;
  return array.pop() + sumArray(array);
}

function reverseString(str) {
  if (str.length === 0) return '';
  return reverseString(str.slice(1)) + str[0];
}

function pow(base, exponent) {
  if (exponent === 0) return 1;
  if (exponent < 1) return 1 / pow(base, exponent * -1);

  return base * pow(base, exponent - 1);
}

function flatten(data) {
  if (!Array.isArray(data)) return [ data ];
  const result = [];

  data.forEach(element => {
    let flat = flatten(element);
    result.push(...flat); // we want to spread the elements from flat into the array
  });

  return result;
}

function fileFinder(directories, targetFile) {
  for (let name in directories || fileFinder(directories[name], targetFile)) {
    if (key === targetFile) {
      return true;
    }
  }
  return false;
}

function pathFinder(directories, targetFile) {
  for (let name in directories) {
    if (name === targetFile) return '/' + targetFile;
    let subdir = directories[name];
    let subPath = pathFinder(subdir, targetFile);
    // if the target is found within in the subdir
    if (subPath !== null) {
      return name + subPath;
    }

  }
  return null;
}