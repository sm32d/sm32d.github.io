const lengthInp = <HTMLInputElement>document.getElementById("len");
const numCheck = <HTMLInputElement>document.getElementById("incNumbers");
const splCheck = <HTMLInputElement>document.getElementById("incSpl");
const res = <HTMLInputElement>document.getElementById("res");

const validate = () => {
    let regex = /^[0-9]+$/
    if (lengthInp.value.trim() == null ||  lengthInp.value.trim() == "") {
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

const random = () => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let nums = '0123456789';
    let spl = '!@#$%^&*';

    validate();

    const length = +lengthInp.value;
    let all = chars;

    if (numCheck.checked) {
        all += nums;
    }

    if (splCheck.checked) {
        all += spl;
    }

    // Pick characers randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += all.charAt(Math.floor(Math.random() * all.length));
    }

    res.value = str;

};

const reset = () => {
    lengthInp.value = '';
    lengthInp.placeholder = "";
    numCheck.checked = false;
    splCheck.checked = false;
    res.value = '';
};