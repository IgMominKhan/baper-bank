const email = 'igmominkhan@outlook.com';
const pwd = "$LinuXLover";

// verify user
function verifyUser(email, password) {
    const userEmail = document.getElementById('email').value;
    const userPwd = document.getElementById('password').value;

    if (userEmail === email && userPwd === password) {
        window.location.assign('./baperbank.html')
    } else {
        document.querySelector('.invalid-feedback').style.display ='block'
    }
}

document.querySelector('[type="submit"').addEventListener('click',function(e){
    e.preventDefault();
    verifyUser(email,pwd)
})