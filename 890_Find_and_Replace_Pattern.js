/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function(words, pattern) {
    let res = [];
    for (let word of words){
        if(word.length != pattern.length) continue;
        let id = 0;
        let dict = [];
        let from_letter = {};
        let from_pattern = {};
        dict[0] = from_letter;
        dict[1] = from_pattern;
        for (let letter of word){
            if(dict[0][letter] == undefined || dict[0][letter] == null ){
                if(dict[1][pattern[id]] == undefined || dict[1][pattern[id]] == null ) {
                    dict[0][letter] = pattern[id];
                    dict[1][pattern[id]] = letter;
                }
                else {
                    break;
                }
            }
            else{
                if(dict[0][letter] == pattern[id]) {
                }
                else {
                    break;
                }
            }
            id ++;
        }
        if (id == word.length) {
            res.push(word);
        }
    };
    return res;
};