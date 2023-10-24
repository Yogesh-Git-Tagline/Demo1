function checkValid(newname,email,newGen,sethobbies,dob,con,state,city){
 
  if (newname == '') {
    document.getElementById('nameerror').innerHTML = "please enter the name"
    return false;
  }
  else if (email == '') {
    document.getElementById('nameerror').innerHTML = ''
    document.getElementById('emailerror').innerHTML = "please enter the Email"
    return false;
  }
  if (newGen == undefined) {
    document.getElementById('emailerror').innerHTML = ''
    document.getElementById('generror').innerHTML = "please choose gender"
    return false;
  }
  else if (sethobbies == '') {
    document.getElementById('generror').innerHTML = ''
    document.getElementById('hoberror').innerHTML = "please select hobbies"
    return false;
  }
  else if (dob == '') {
    document.getElementById('hoberror').innerHTML = ''
    document.getElementById('doberror').innerHTML = "please select DOB"
    return false;
  }
  else if (con == '') {
    document.getElementById('doberror').innerHTML = ''
    document.getElementById('conerror').innerHTML = "please select country"
    return false;
  }
  else if (state == '') {
    document.getElementById('conerror').innerHTML = ''
    document.getElementById('stateerror').innerHTML = "please select state"
    return false;
  }
  else if (city == '') {
    document.getElementById('stateerror').innerHTML = ''
    document.getElementById('cityerror').innerHTML = "please select city"
    return false;
  }
  else {
    let i;
    let allspan = document.getElementsByTagName('span')
    for (i = 0; i < allspan.length; i++) {
      allspan[i].innerHTML = ''
    }
    document.getElementById("myform").reset();
    return true;
  }

}