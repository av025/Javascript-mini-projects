document.addEventListener("DOMContentLoaded", function() {
    let counterValue = document.getElementById("counter-screen");
   const incrementButton = document.getElementById("incrementValue"); 
   const decrementButton = document.getElementById("decrementValue");
   const resetButton = document.getElementById("resetValue"); 
  
    
   // Increment Handler 
    incrementButton.addEventListener("click", function increment() {
        //* Whevenever we take input or any thing from browser so default it comes in string type so we have to convert that into string type...
       let currentValue =  parseInt(counterValue.textContent); 
       currentValue++; 
       counterValue.textContent = currentValue; 
    });  


    // Decrement Handler 
    decrementButton.addEventListener("click", function decrement() {
        let currentValue = parseInt(counterValue.textContent); 
        currentValue--; 
        counterValue.textContent = currentValue; 
    });  


    // Reset Handler 
    resetButton.addEventListener("click", function reset(){
        counterValue.textContent = 0; 
    })


}); 


