document.addEventListener('DOMContentLoaded', documentEvents  , false);

function myAction(input) { 
    console.log("input value is : " + input.value);
    alert("Hello " + input.value + " !");
}

function documentEvents() {    
  document.getElementById('submitbutton').addEventListener('click', 
    function() { myAction(document.getElementById('name_textbox'));
  });

  
}