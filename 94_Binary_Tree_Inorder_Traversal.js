/**
 * 
 * Description: Given a binary tree, return the inorder traversal of its nodes' values.
 * Example: 
 * Input: [1,null,2,3]
 * Output: [1,3,2]
 */


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var recursiveInorderTraversal = function(root) {
    
    let traversal = [];
    let bucket;
    if (root) {
        if (root.left){
            bucket = recursiveInorderTraversal(root.left);
            if (bucket.length > 0)
                traversal = traversal.concat(bucket);
        }
        traversal.push(root.val);
        if (root.right){
            bucket = recursiveInorderTraversal(root.right);
            if (bucket.length > 0)
                traversal = traversal.concat(bucket);
        }
    }
  
    return traversal;
    
};
