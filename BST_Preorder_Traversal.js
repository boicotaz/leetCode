/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    let stack =[];
    let node;

    let root = new TreeNode(preorder[0]);
    stack[0] = root;
    let j;
    for (let i =1 ; i<= preorder.length -1 ; i++){
        node = new TreeNode(preorder[i]);

        if (node.val < stack[0].val){
            stack[0].left = node;
            stack.unshift(node);
        }
        else {
            let parent;
            while (stack.length > 0 && node.val > stack[0].val) {
                parent = stack.shift();
            }
            parent.right = node;
            stack.unshift(node);
        }
    }
    return root;
};

let preorder = [19,4,8,11];
console.log(bstFromPreorder(preorder))


