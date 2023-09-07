var isPowerOfFour = function(n) {
    let k = Math.log(n) / Math.log(4);
    if (Number.isInteger(k)) return true;
    else return false;
};