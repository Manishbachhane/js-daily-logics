var maxArea = function(height) {
    let max=[];
    for(let i=0;i<height.length;i++){
        for(let j=i+1;j<height.length;j++){
            let num,index;
            num=height[i]<height[j]?height[i]:height[j];
            index=j-i;
            let sum=num*index;
            max.push(sum);
        }
    }
    max.sort((a,b)=>b-a)
    return max[0];
};
