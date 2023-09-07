var isValid = function(s) {
    s = [...s];
    let stack = [];

    for (let element of s) {
        if (element == "(" || element == "[" || element == "{") {
            stack.push(element);
        } else {
            if (element == ")") {
                if (stack[stack.length - 1] == "(") {
                    stack.pop();
                } else {
                    return false;
                }
            } else if (element == "]") {
                if (stack[stack.length - 1] == "[") {
                    stack.pop();
                } else {
                    return false;
                }
            } else if (element == "}") {
                if (stack[stack.length - 1] == "{") {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }
    }

    if (s.length % 2 !== 0) {
        return false;
    }

    if (stack.length == 0) {
        return true;
    }

    return false;
};