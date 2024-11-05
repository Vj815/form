
        function area()
        {
            const len=document.getElementById('length').value;
            const bre=document.getElementById('breath').value;
            const rect=len*bre;
            document.getElementById('result').innerText= `The area of the circle is: ${rect}`;

            
        }

   

 
        function rect() 
{
    const r = document.getElementById('radius').value;
    const area=Math.PI*r*r;
    document.getElementById('result1').innerText = `The area of the circle is: ${area}`;

}

    
        function calculateAreaT() 
{
    const b = document.getElementById('base').value;
    const h = document.getElementById('height').value;
    const area=(b*h)/2;
    document.getElementById('result2').innerText = `The area of the circle is: ${area}`;

}
   
