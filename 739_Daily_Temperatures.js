/**
 * 
 * Description: Given a list of daily temperatures T, return a list such that,
 * for each day in the input, tells you how many days you would have to wait until a warmer temperature.
 * If there is no future day for which this is possible, put 0 instead.
 * 
 * Example: Given the list of temperatures T = [73, 74, 75, 71, 69, 72, 76, 73],
 * your output should be [1, 1, 4, 2, 1, 1, 0, 0].
 */

/**
 * @param {number[]} T
 * @return {number[]}
 * Time Complexity: O(n*n)
 */
var naiveDailyTemperatures = function(T) {
    let res = new Array(T.length);
    for (let i = 0 ; i < T.length ; i++){
        let day = T[i];
        res[i] = 0;
        for (let j = i; j < T.length; j++){
            if (day < T[j]){
                res[i] = j - i;
                break;
            }
        }
    }
    return res;
};


/**
 * @param {number[]} T
 * @return {number[]}
 * Time Complexity : O(n)
 */
var StackDailyTemperatures = function(T) {
    let res = new Array(T.length);
    let stack = [];
    for (let i = T.length - 1; i>= 0 ; i--){
        if (stack.length){
            if (T[i] >= T[stack[0]]){
                res[i] = 0;
                stack = [];
                stack.unshift(i);
            }
            else {
                let j = stack.length - 1;
                let flag = 1;
                while ( j >= 0){
                    if (T[i] < T[stack[j]]){
                        stack.push(i);
                        res[i] = stack[j] - i;
                        break;
                    }
                    else if ( T[i] >= T[stack[j]]){
                        if (flag) {
                            if (T[i] == T[stack[j]]) {
                                res[i] = res[stack[j]] + ( stack[j] - i);
                            }
                            else {
                                res[i] = stack[j] - i;
                            }
                            flag = 0;
                        }
                        stack.pop();
                        j--;
                    }
                }
            }
        }
        else {
            res[i] = 0;
            stack.unshift(i);
        }
    }
    return res;
};

