'use strict'

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var threeSum = function(nums) {
    nums.sort(function(a,b){return a-b});
    let res = [];
    if (nums.length < 3){
        return [] ;
    }
    for(let k = 0 ; k < nums.length -2 ; k++){
        if(k > 0 && nums[k] == nums[k-1]) continue;
        if(nums[k] > 0) break;
        let start = k + 1;
        let end = nums.length -1 ;
        while (start < end && start <= nums.length -1 && end >=0 ){
            
            if( nums[k]+ nums[start] + nums[end] == 0){
                res.push([nums[k], nums[start],nums[end]]);
                let temp = start +1;
                let temp2 = end -1;
                while(nums[temp] == nums[start]  ){
                    temp ++;
                }
                while(nums[temp2] == nums[end]  ){
                    temp2 ++;
                }
                start = temp;
                end = temp2;
            }
            else if ( nums[k]+ nums[start] + nums[end] < 0) {
                start = start +1;
            }
            else{
                end = end - 1;
            }
        }
    }
  return res;
};


// binarySear
let nums = [-1,0,1,2,-1,-4];

console.log(threeSum(nums));


            // for (let j = nums.length -1 ; j > i ; j--){
            //     // if(j < nums.length -1 && nums[j] == nums[j-1]) continue;
            //     if( nums[k]+ nums[i] + nums[j] == 0){
            //         // console.log(nums[k],nums[i],nums[j]);
            //             res.push([nums[k] , nums[i],nums[j]]);
            //             break;

            //     }

            // }