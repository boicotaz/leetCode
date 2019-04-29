let A = [3,1,2,4];


/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(A) {
    let even = [];
    let odd = [];

    A.forEach(a => {
        if(a % 2 ==1){
            odd.push(a);
        }
        else {
            even.push(a);
        }
    })
    console.log(even.concat(odd));
};

sortArrayByParity(A);