/**
 * Definition for a binary tree node.
 * class
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 let nums = [1,2,3];
class Treenode {
    constructor(val,begin,end , index){
        this.val = val;
        this.begin = begin;
        this.end = end;
        this.left = null;
        this.right  = null;
        this.index = index;
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

var tolis = 5;

var constructMaximumBinaryTree = function(nums , begin =0,end = nums.length ) {
    console.log(tolis);
    if (begin == end) {
        return null;
    }
    let  root = Node(begin,end);
    // console.log(root);/**
//  * Definition for a binary tree node.
//  * class
//  * function TreeNode(val) {
//  *     this.val = val;
//  *     this.left = this.right = null;
//  * }
//  */
// let nums = [1,2,3];
class Treenode {
    constructor(val,begin,end , index){
        this.val = val;
        this.begin = begin;
        this.end = end;
        this.left = null;
        this.right  = null;
        this.index = index;
    }
}
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var tolis = 5;
var constructMaximumBinaryTree = function(nums , begin =0,end = nums.length ) {
   console.log(tolis);
    if (begin == end) {
        return null;
    }
    let  root = Node(begin,end,nums);
    // console.log(root);
    root.left = constructMaximumBinaryTree(nums,root.begin,root.index);
    root.right =  constructMaximumBinaryTree(nums,root.index + 1 ,root.end);
    return root;
};


function Node(begining ,ending,nums) {
    
    max = -1;
    index = begining;
    for( let i = begining ; i < ending ;i ++){
        if(nums[i] > max){
            max = nums[i];
            index = i;
        }
    }
    let root1 = new Treenode(max,begining,ending,index);
    return root1
}
// console.log();
// console.log(constructMaximumBinaryTree(nums))
// console.log(root)
// console.log(nums.slice(0,index))
// console.log(nums.slice(index + 1,nums.length))
    root.left = constructMaximumBinaryTree(nums,root.begin,root.index);
    root.right =  constructMaximumBinaryTree(nums,root.index + 1 ,root.end);
    return root;
};


function Node(begining ,ending) {
    
    max = -1;
    index = begining;
    for( let i = begining ; i < ending ;i ++){
        if(nums[i] > max){
            max = nums[i];
            index = i;
        }
    }
    let root1 = new Treenode(max,begining,ending,index);
    return root1
}
constructMaximumBinaryTree(nums)
// console.log();
// console.log()
// console.log(root)
// console.log(nums.slice(0,index))
// console.log(nums.slice(index + 1,nums.length))