document.getElementById('date').innerHTML = new Date().toDateString();
document.getElementById('date2').innerHTML = new Date().toDateString();
document.getElementById('date3').innerHTML = new Date().toDateString();
document.getElementById('date4').innerHTML = new Date().toDateString()

function fFunction() {
    var a = document.getElementById('fname')
    a.value = a.value.toUpperCase();
}

function lFunction() {
    var a = document.getElementById('lname')
    a.value = a.value.toUpperCase();
}