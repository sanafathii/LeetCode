var mergeAlternately = function (word1, word2) {
  let length = word1.length > word2.length ? word1.length : word2.length;
  word1 = [...word1];
  word2 = [...word2];
  let s = [];

  for (let i = 0; i < length; i++) {
    s.push(word1[i]);
    s.push(word2[i]);
  }

  return s.join("");
};
