/**
 * Description: 
 * Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num
 * calculate the number of 1's in their binary representation and return them as an array.
 * 
 * Example: 
 * Input: 5
 * Output: [0,1,1,2,1,2]
 */

/**
 * @param {number} num
 * @return {number[]}
 * Time Complexity = O(n)
 * Space Complexity = O(n)
 */
var countBits = function(num) {
    res= [];
    res[0] = 0;
    for (let i = 1; i <= num; i++){
        let bucket;
        bucket = (i-1) & i;
        if (bucket == 0) {
            res[i] = 1;
        }
        else if( bucket == i - 1) {
            res[i] = res[i-1] + 1;
        }
        else {
            res[i] = res[bucket] + res[i - bucket];
        }
    }
    return res;
};