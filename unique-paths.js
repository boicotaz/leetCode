/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    if( m ==3 ){
        let sum =0;
        for ( let i = 1 ; i <= n ; i ++){
            sum += i;
        }
        return sum;
    }
    else if ( n == 3) {
        let sum =0;
        for ( let i = 1 ; i <= m ; i ++){
            sum += i;
        }
        return sum;
    }
    else if(m == 2){
        return n;
    }
    else if( n == 2 ){
        return m;
    }
    else if( m==1 ||  n==1){
        return 1;
    }
    else if ( m == n ){
        return 2*uniquePaths(m-1 , n)
    }
    else {
        return uniquePaths(m-1 , n) + uniquePaths(m , n-1);
    }
};

console.log(uniquePaths(3,6))