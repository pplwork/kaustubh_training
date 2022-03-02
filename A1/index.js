var inputEmail = document.getElementById('input-email');
var password = document.getElementById('password');
var button = document.querySelector('.submit-button');
var regEx = /\S+@\S+\.\S+/; // string, white-space, @ , white-space, dot, white-space, value, string //
var form = document.querySelector('.form');
var passCheck = false
ischecked = false
var checkBoxes = document.getElementsByClassName( 'mycheckboxes' );



function validateForm(){
    var count = 0;
        for (var i = 0; i < checkBoxes.length; i++) {
             if ( checkBoxes[i].checked ) {
               count++
              }
         }
      if(count>=2){
            ischecked=true
    }
    if (regEx.test(inputEmail.value) && passCheck==true && ischecked==true){
       button.style.backgroundColor = 'green';
       button.disabled = false;
    } else {
        button.innerText="Confirm"
       button.style.backgroundColor = '#c5dce7';
       button.disabled = true;
    }
}
form.addEventListener('submit', function(event){
     event.preventDefault();
     alert("submitted")

})

    document.getElementById("password").oninput = function(e) {
        var str = (e.target.value)
        if (str.length < 6) {
            document.getElementById("validpass").innerText="password must be greater than 6 characters"
            document.getElementById("validpass").style.color = "red"
        } else if (str.length > 50) {
            document.getElementById("validpass").innerText="password to long"
            document.getElementById("validpass").style.color = "red"
        } else if (str.search(/\d/) == -1) {
            document.getElementById("validpass").innerText="password must contain number"
            document.getElementById("validpass").style.color = "red"
        } else if (str.search(/[a-zA-Z]/) == -1) {
            document.getElementById("validpass").innerText="password must contain letter"
            document.getElementById("validpass").style.color = "red"
        } else if (str.search(/[A-Z]/) == -1) {
            document.getElementById("validpass").innerText="password must contain capital letter"
            document.getElementById("validpass").style.color = "red"
        }else if (str.search(/[^a-zA-Z0-9]/) == -1) {
            document.getElementById("validpass").innerText="password must contain a symbol"
            document.getElementById("validpass").style.color = "red"
        }else if (str.search(/[^a-zA-Z0-9\!\@\#\$\%\^\&\*\(\)\_\+\.\,\;\:]/) != -1) {
            document.getElementById("validpass").innerText="bad password"
            document.getElementById("validpass").style.color = "red"
        }
        else{
            document.getElementById("validpass").innerText="good password"
            document.getElementById("validpass").style.color = "green"
            passCheck=true
        }
    }



