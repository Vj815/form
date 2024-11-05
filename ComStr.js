function ComparStr()
{
    string1=document.getElementById('str1').value;
    string2=document.getElementById('str2').value;
    let result;
   
   if(string1 === string2) 
   {
    result = "The strings are equal.";
   }
   else
   {
    result = "The strings are not equal.";
   }
   document.getElementById("result").innerText = result;
  
}
function ComparStr1()
{
  const  string1=document.getElementById('str1').value;
   const string2=document.getElementById('str2').value;
    
    const result = string1.localeCompare(string2);
    
   
   document.getElementById('result1').textContent=`locale comparison result: ${result}`;
  
  
}

