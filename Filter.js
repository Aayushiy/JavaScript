//finding values greater than 4 using FILTER function
 
function greater(x)
{
     return x>4;
}
function filter_own(data, required_fn){
    let Filter_Array=[];
    for(i=0;i<data.length;i++){
        if(required_fn(data[i])==true)
            Filter_Array.push(data[i]);
    }
    return Filter_Array;
}
const output1=filter_own(arr,greater);
document.write(output1);
document.write("<br>");