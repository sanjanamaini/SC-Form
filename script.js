// document.addEventListener('DOMContentLoaded', function() {
//     // Get a reference to the form
//     var form = document.querySelector('form');

//     // Attach a submit event listener to the form
//     form.addEventListener('submit', function(event) {
//         event.preventDefault(); // Prevent the form from submitting

//         // Display a success message
//         var message = document.createElement('p');
//         message.textContent = 'Thank you for submitting the form!';
//         message.style.color = 'green';
//         form.appendChild(message);
//     });
// });

// document.addEventListener('submit',function(e){
//     alert("Thanks!");
// })
// let btn=document.querySelector('submit');
// btn.addEventListener()

var scform=document.getElementById("scform");   
if(scform){
    scform.addEventListener('submit',function(e){
        alert("Thanks for filling the form!");
    })
}


