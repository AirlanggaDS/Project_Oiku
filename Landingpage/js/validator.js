function validate() {
    var email = document.getElementById('email-form').value;
    var password = document.getElementById('pass-form').value;

    if (password.length < 8) {
        document.getElementById('password-error').innerHTML = "Password must be 8 characters long minimum";
        return false;
    }

    return true;
}

function dummyMiddleware() {

    var email = document.getElementById('email-form').value;
    var form = document.getElementById('loginForm').action;

    if (email === "admin@gmail.com") {
        window.location.assign('dashboard-admin/dash-admin.html');
    } else if (email === "consignor@gmail.com") {
        window.location.assign('dashboard-consignor/dash-cons.html');
    } else if (email === "customer@gmail.com"){
        window.location.assign('dashboard-customer/dash-cust.html');
    } else{
        window.location.assign('#');
    }

}