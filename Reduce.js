
//finding maximum value using REDUCE function

 function max(arr,acc)
 {
     for(i=0;i<arr.length;i++)
     {
         if(arr[i]>acc)
           acc=arr[i];   
     }
     return acc;
 }
 
 function reduce_own(data,required_fn,initial_val)
 {
   let acc=initial_val;
   let required_value=required_fn(data,acc);
   return required_value;
 }
 const output3=reduce_own(arr,max,0);
 document.write(output3);
 document.write("<br>");



