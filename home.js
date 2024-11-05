
    let result = document.getElementById("SITS");

    function changeColor(color) 
    {
        document.body.style.background = color;
    }

    // On mouse over event
    function changeBackgroundColor() 
    {
        changeColor('tomato');
        result.innerHTML = "Background changed";
    }

    // The focus event
    function changeInputBackground(input) 
    {
        input.style.background = "white";
    }
    
    
