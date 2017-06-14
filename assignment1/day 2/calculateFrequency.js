// Problem 2: Complete the calculateFrequency function that takes lowercase string as input and returns frequency of all english alphabet. (using only array, no in-built function)
function calculateFrequency(string) 
{
  // Write your code here
  var output=[];
 // var a=string.split('');
  var a=Array.from(string);
  console.log(a);
  for(i=0;i<a.length;i++)
   {
      if(a[i].charCodeAt(0)>96 && a[i].charCodeAt(0)<123)
       {
         
          if(output[a[i]])
            {
              output[a[i]]++;
            }
            else
              {
                output[a[i]]=0;
                 output[a[i]]++;
              }
       }
    }
  console.log(output);
  return output;
}
