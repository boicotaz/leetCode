function TreeNode(val) {
         this.val = val;
         this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
*/
var pruneTree = function(root) {
    if(root){
        root.left = pruneTree(root.left);
        root.right = pruneTree(root.right);
        if( root.left == null && root.right == null && root.val == 0 ) {
            return null;
        }
        else{
            return root;
        }
    }
    else {
        return null;
    }
};

