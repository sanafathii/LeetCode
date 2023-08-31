var reverseWords = function (s) {
  s = s.trim().split(" ");

  let k = [];

  s.forEach((element) => {
    if (element.trim() != "") {
      k.unshift(element.trim());
    }
  });

  k = k.join(" ");
  return k;
};
