// -by Mac Mie
// Import class User
import {
    User
} from "../models/User.js";

// Set some global variables
let token_cybersoft = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJGcm9udGVuZCA3MyIsIkhldEhhblN0cmluZyI6IjIzLzA1LzIwMjMiLCJIZXRIYW5UaW1lIjoiMTY4NDgwMDAwMDAwMCIsIm5iZiI6MTY1OTg5MTYwMCwiZXhwIjoxNjg0OTQ3NjAwfQ.u471oZWr9EMgIb7oeyuaxfi8spgAgUuTkUHYSS9pBWg";
let valid = true;


// Set event for button Add-Todo-Task
document.querySelector('#buttonSubmit').onclick = function () {
    // Get the input
    // console.log("clicked");
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
function callAPIRegister(returnData,alertId) {
    let promise = axios({
            url: 'https://shop.cyberlearn.vn/api/Users/signup',
            method: 'POST',
            data: returnData,
            headers: {
                "Content-Type": "application/json-patch+json"
            },
        })
        .then(function (response) {
            // Handle success
            console.log(response);

            document.getElementById(alertId).style.display = 'block';
            document.getElementById("buttonSubmit").style.display = 'none';
            // document.getElementById("buttonSubmit").disabled = true;
            document.getElementById(alertId).innerHTML = `Register successfully!`;
        })
        .catch(function (response) {
            // Handle error
            console.log(response);
        });
};

// function getInforRegister() {
//     let userFullName = removeVietnameseTones(document.querySelector('#userFullName').value);
//     let userEmail = removeVietnameseTones(document.querySelector('#userEmail').value);
//     let userPhoneNumber = removeVietnameseTones(document.querySelector('#userPhoneNumber').value);
//     let userPassword = removeVietnameseTones(document.querySelector('#userPassword').value);
//     let userConfirmPassword = removeVietnameseTones(document.querySelector('#userConfirmPassword').value);
//     let userGender = $('input[type="radio"][name="gender"]:checked').val();
// };

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
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
    // Remove extra spaces
    // Bỏ các khoảng trắng liền nhau
    str = str.replace(/ + /g, " ");
    str = str.trim();
    // Remove punctuations
    // Bỏ dấu câu, kí tự đặc biệt
    str = str.replace(
        /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
        " "
    );
    return str;
}