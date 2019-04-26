
// Definition for a binary tree node.
 function TreeNode(val) {
     this.val = val;
     this.left = this.right = null;
 }
 
/**
 * @param {string} S
 * @return {TreeNode}
 */
var recoverFromPreorder = function(S) {
    
    let reg = /(-+)?(\d+\b)/g
    let match;
    let stack = [];
    let root;
    while(match = reg.exec(S)){
        // console.log(match)
        if ( match[1] == undefined ) {
            root = new TreeNode(Number.parseInt(match[2]));
            stack[0] = root;
        }
        else {
            stack[match[1].length] =  new TreeNode(Number.parseInt(match[2]));
            // console.log(match[1],match[2])
            if ( stack[match[1].length - 1 ].left == null){
                stack[match[1].length - 1 ].left = stack[match[1].length];
                // console.log(stack[match[1].length - 1 ])
            }
            else {
                stack[match[1].length - 1 ].right = stack[match[1].length];
                // console.log(stack[match[1].length - 1 ])
            }
        }
        // console.log(match[1],match[2]);        
    }
    return root;
};


let S = "1-401--349---90--88";
console.log(recoverFromPreorder(S));
let a = '56';
console.log(typeof(Number.parseInt(a)));