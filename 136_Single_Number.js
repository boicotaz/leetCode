/**
 * 
 * Description: 
 * Given a non-empty array of integers, every element appears twice except for one. Find that single one. 
 */


/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n*n)
 * Space Complexity: O(n)
 */
var NaiveSingleNumber = function(nums) {
    let res = new Map();
    let arr = [];
    nums.forEach(elem => {
        if (!res.has(elem)){
            res.set(elem,elem);
        }
        else{
            res.delete(elem);
        }
    });

    
    for (let elem of res.keys()){
        return elem;
    }
};

/**
 * @param {number[]} nums
 * @return {number}
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */
var BitwiseXorSingleNumber = function(nums) {
    let bucket = 0;
    
    nums.forEach(elem => {
        bucket ^=elem;
    });
    return bucket;    
};