/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

var store = {};
var uniquePaths = function(m, n) {
    let res;
    if ( store[m]== undefined) {
        store[m] = {} 
    }
    if (store[n] == undefined){
        store[n] = {}
    }
    if (store[m][n] == undefined ){
        if(m == 2){
            res = n;
            store[2][n] = res;
            return res;
        }
        else if (n == 2 ){
            res = m;
            store[m][2] = res;
            return res;
        }
        else if (m == 1 || n == 1 ){
            res = 1;
            return res;
        }
        else {
            res = uniquePaths(m,n-1) + uniquePaths(m-1,n);
            store[m][n] = res;
            store[n][m] = res;
            return res;
        }
    }
    else {
        return store[m][n];
    }    




}
