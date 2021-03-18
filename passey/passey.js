var lengthInp = document.getElementById("len");
var numCheck = document.getElementById("incNumbers");
var splCheck = document.getElementById("incSpl");
var res = document.getElementById("res");
var validate = function () {
    var regex = /^[0-9]+$/;
    if (lengthInp.value.trim() == null || lengthInp.value.trim() == "") {
        lengthInp.placeholder = "This field is complusory";
    }
    else if (!regex.test(lengthInp.value)) {
        lengthInp.value = "";
        lengthInp.placeholder = "Please enter a number";
    }
    else {
        lengthInp.placeholder = "";
    }
};
var random = function () {
    // Declare all characters
    var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var nums = '0123456789';
    var spl = '!@#$%^&*';
    validate();
    var length = +lengthInp.value;
    var all = chars;
    if (numCheck.checked) {
        all += nums;
    }
    if (splCheck.checked) {
        all += spl;
    }
    // Pick characers randomly
    var str = '';
    for (var i = 0; i < length; i++) {
        str += all.charAt(Math.floor(Math.random() * all.length));
    }
    res.value = str;
};
var reset = function () {
    lengthInp.value = '';
    lengthInp.placeholder = "";
    numCheck.checked = false;
    splCheck.checked = false;
    res.value = '';
};
