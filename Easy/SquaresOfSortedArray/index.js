//

var sortedSquares = function(nums) {
    let k = [];
    nums.forEach((element) => {
        k.push(element * element);
    });

    return k.sort((a, b) => a - b);
};