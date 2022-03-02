//Square of each  value using MAP function
const array=[1,2,3,4,5,8,6,9,7];
function square(x)
{
    return x**2;
}

function map_own(data,required_fn){
    let output=[];
    for(i=0;i<data.length;i++){

        output.push(required_fn(data[i]));
    }
    return output;
}
const outputusingmap = map_own(arr,square);
document.write(output);
document.write("<br>");