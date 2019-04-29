/**
 * @param {number[]} nums
 * @return {TreeNode}
 */



var constructMaximumBinaryTree = function(nums , begin =0,end = nums.length ) {
    if (begin == end) {
        return null;
    }
    let  root = Node(begin,end,nums);
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
