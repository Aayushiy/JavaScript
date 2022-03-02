 //use of for Each loop
 function print_double(arr)
 {
     return arr*2;
 }
 function forEach_own(data,required_fn)
 {
     for(i=0;i<data.length;i++)
     {
         data[i]=required_fn(data[i]);
     }
 }
forEach_own(arr,print_double);
document.write(arr);
