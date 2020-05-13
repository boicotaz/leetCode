/**
 * Description: Given a collection of distinct integers, return all possible permutations.
 * Input: [1,2,3]
 * Output:
 * [
 *  [1,2,3],
 *  [1,3,2],
 *  [2,1,3],
 *  [2,3,1],
 *  [3,1,2],
 *  [3,2,1]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    let res = [];
    if (nums.length == 1) {
        return [nums];
    }
    else {
        nums.forEach((elem,index,array) => {
            let partArr = [];
            partArr = partArr.concat(array.slice(0,index)).concat(array.slice(index + 1, array.length));
            let partRes = permute(partArr);
            partRes = partRes.map(elm => {
                elm.unshift(elem);
                return elm;
            });
            res = res.concat(partRes);
        })
        return res;
    }
};