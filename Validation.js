function checkValid(newname, email, newGen, sethobbies, dob, con, state, city) {




    if (newname == '' && email == '' && newGen == undefined && sethobbies == '' && dob == '' && con == '' && state == '' && city == '') {
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }



    else if (newname == '' && newGen == undefined && sethobbies == '' && dob == '' && con == '' && state == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }
    else if (newname == '' && email == '' && sethobbies == '' && dob == '' && con == '' && state == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }
    if (newname == '' && email == '' && newGen == undefined && dob == '' && con == '' && state == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }
    else if (newname == '' && email == '' && newGen == undefined && sethobbies == '' && con == '' && state == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }
    else if (newname == '' && email == '' && newGen == undefined && sethobbies == '' && dob == '' && state == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }

    else if (newname == '' && email == '' && newGen == undefined && sethobbies == '' && dob == '' && con == '' && city == '') {
        ClearErrors()
        document.getElementById('nameerror').innerHTML = "please enter the name"
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }
    else if (email == '' && newGen == undefined && sethobbies == '' && dob == '' && con == '' && state == '') {
        ClearErrors()
        document.getElementById('emailerror').innerHTML = "please enter the Email"
        document.getElementById('generror').innerHTML = "please choose gender"
        document.getElementById('hoberror').innerHTML = "please select hobbies"
        document.getElementById('doberror').innerHTML = "please select DOB"
        document.getElementById('conerror').innerHTML = "please select country"
        document.getElementById('stateerror').innerHTML = "please select state"
        document.getElementById('cityerror').innerHTML = "please select city"
        return false;
    }

    else if (newname == '' || email == '' || newGen == undefined || sethobbies == '' || dob == '' || con == '' || state == '' || city == '') {
        document.getElementById("myform").reset();
        ClearErrors()
        return false;
    }

    else {
        document.getElementById("myform").reset();
        ClearErrors()
        return true
    }

}
function ClearErrors() {
    let i;
    let allspan = document.getElementsByTagName('span')
    for (i = 0; i < allspan.length; i++) {
        allspan[i].innerHTML = ''
    }
    return true;
}