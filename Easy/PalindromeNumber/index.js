var isPalindrome = function(x) {
    let numchar = String(x).split("");
    let k = 0;
    if (numchar.length === 1) return true;
    if (numchar.length % 2 === 0) {
        for (let i = 0; i < numchar.length / 2; i++) {
            if (numchar[i] === numchar[numchar.length - 1 - i]) {
                k++;
            }
        }
        if (k > 0 && k === numchar.length / 2) {
            return true;
        } else return false;
    } else {
        let length = Math.round(numchar.length / 2);

        for (let i = 0; i < length - 1; i++) {
            console.log(numchar[i], numchar[numchar.length - 1 - i]);
            if (numchar[i] === numchar[numchar.length - 1 - i]) {
                k++;
            }
        }
        if (k > 0 && k == length - 1) {
            return true;
        } else return false;
    }
};