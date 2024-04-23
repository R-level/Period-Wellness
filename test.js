// Get the div element and the buttons
const divElement = document.getElementById('test');
const buttons = document.querySelectorAll('button');
const clickMe = document.querySelector("#clickMe");

clickMe.addEventListener('click', () =>{
clickMe.style.color='red';
});
// Add click event listeners to the buttons
/*buttons.forEach((button) => {
  button.addEventListener('click', () => {
    // Create a new paragraph element
    button.style('color', 'red');
    const newParagraph = document.createElement('p');
    newParagraph.textContent = 'This is paragraph';
    document.appendChild(newParagraph);
  });
    // Replace the existing content with the new paragraph
    
    
   

});*/