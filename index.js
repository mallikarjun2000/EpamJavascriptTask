var btn = document.getElementById('submit');
btn.style.background ="#1234abc"
//document.write('<h1>Hello World</h1>')
function check(){
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if(email.indexOf('@') == -1)
    {
        alert(' Enter correct email ')
    }
    else
    {
        if(password.length < 9)
        {
            alert( ' Password you entered might not be strong');
        }
        else
        {
            alert(' Accepted ')
        }
    }
}