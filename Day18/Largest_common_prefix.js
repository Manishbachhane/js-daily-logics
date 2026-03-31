strs = ["flower","flow","flight"]


var longestCommonPrefix = function(strs) {
 let str="";
    let chr;
    let  l= strs.length; 
    let ll=strs[0].length

    if(0==strs[0].length){
        return "";
    }

    for(let i=0;i<ll;i++){
          chr=strs[0][i];
        for(let j=0;j<l;j++){
            if(chr==strs[j][i] && j==l-1){
              str+=chr;
            }
          }
        }
    
    return str;
};  

console.log(longestCommonPrefix(strs));