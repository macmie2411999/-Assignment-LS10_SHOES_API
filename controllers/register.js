// -by Mac Mie
// Import class User
import {
    User
} from "../models/User.js";

// Set some global variables
let token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
let valid = true;


// Set event for button Submit
document.querySelector('#buttonSubmit').onclick = function () {
    // Get the input
    let userFullName = document.querySelector('#userFullName').value;
    let userEmail = document.querySelector('#userEmail').value;
    let userPhoneNumber = document.querySelector('#userPhoneNumber').value;
    let userPassword = document.querySelector('#userPassword').value;
    let userConfirmPassword = document.querySelector('#userConfirmPassword').value;
    let userGender = document.querySelector('input[name="gender"]:checked').value;
    console.log(userFullName + userEmail + userGender);

    // Check if password matches
    valid = checkPassword(userPassword, userConfirmPassword, "alert-password-match");
    valid &= validation.checkEmailInput(userEmail, 'alert-email', "Email");
    valid &= validation.checkLengthInput(userPassword, 'alert-password-length', "Password", 6, 30);
    valid &= validation.checkNumberInput(userPhoneNumber, 'alert-phonenumber', "Phone Number");
    if (!valid) {
        return;
    }

    // Create new user to return to server
    var newUser = new User(userEmail, userPassword, userFullName, userGender, userPhoneNumber);
    console.log(JSON.stringify(newUser));
    callAPIRegister(JSON.stringify(newUser), "alert-register");
}

/**
 * This function is used to call api and return to server infor of user registered
 * and handle affairs after registering
 * @param {*} returnData Data sent to server
 * @param {*} alertId Show message success
 */
function callAPIRegister(returnData, alertId) {
    let promise = axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: returnData,
            headers: {
                "Content-Type": "application/json-patch+json"
            },
        })
        .then(function (response) {
            // Handle if successfully return data
            console.log(response);

            document.getElementById(alertId).style.display = 'block';
            document.getElementById("buttonSubmit").style.display = 'none';
            document.getElementById(alertId).innerHTML = `Register successfully!`;
        })
        .catch(function (response) {
            // Handle if failed
            console.log(response);
        });
};

/**
 * Check if password is valid
 * @param {*} errId Id tag of the error
 * @returns boolean
 */
function checkPassword(password, confirmPassword, errId) {
    let flagMatch = false;
    if (password === confirmPassword) {
        // Turn the flag on if there are any duplicates
        flagMatch = true;
    }

    if (!flagMatch) {
        document.getElementById(errId).style.display = 'block';
        document.getElementById(errId).innerHTML = `Please re-check password!`;
        return false;
    }

    document.getElementById(errId).style.display = 'none';
    return true;
}

/**
 * This function remove all the Vietnamese Tones
 * @param {*} str String need to be re-formated
 * @returns New re-formated string
 */
function removeVietnameseTones(str) {
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "a");
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "e");
    str = str.replace(/??|??|???|???|??/g, "i");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "o");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "u");
    str = str.replace(/???|??|???|???|???/g, "y");
    str = str.replace(/??/g, "d");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "A");
    str = str.replace(/??|??|???|???|???|??|???|???|???|???|???/g, "E");
    str = str.replace(/??|??|???|???|??/g, "I");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, "O");
    str = str.replace(/??|??|???|???|??|??|???|???|???|???|???/g, "U");
    str = str.replace(/???|??|???|???|???/g, "Y");
    str = str.replace(/??/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // M???t v??i b??? encode coi c??c d???u m??, d???u ch??? nh?? m???t k?? t??? ri??ng bi???t n??n th??m hai d??ng n??y
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ?? ?? ?? ?? ??  huy???n, s???c, ng??, h???i, n???ng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ?? ?? ??  ??, ??, ??, ??, ??
    // Remove extra spaces
    // B??? c??c kho???ng tr???ng li???n nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // B??? d???u c??u, k?? t??? ?????c bi???t
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
    );
    return str;
}