/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid ,row=0,col=0) {
    let r = obstacleGrid.length;
    let c = obstacleGrid[0].length; 

    if(obstacleGrid[row][col] == 1 ) return 0;
    else if(row == r-1 && col == c-1) return 1;
    else {
        if ( row == r-1 ) {
           return uniquePathsWithObstacles(obstacleGrid,row,col+1);
        }
        else if(col == c-1 ){
            return uniquePathsWithObstacles(obstacleGrid,row+1,col );
        }
        else {
            return uniquePathsWithObstacles(obstacleGrid,row+1,col ) + uniquePathsWithObstacles(obstacleGrid,row,col+1 )
        }
        
    }

};