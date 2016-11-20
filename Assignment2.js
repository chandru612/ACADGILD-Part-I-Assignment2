/**
 * Created by chandrasekar on 20/11/16.
 */


var EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

var validateEmail = function (email) {
    return console.log(email.length > 0 && EMAIL_REGEX.test(email));
}

validateEmail("chandru.androiddeveloper@gmail.com")