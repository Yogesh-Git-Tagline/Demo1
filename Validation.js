function checkValid(newname, email, newGen, sethobbies, dob, con, state, city) {

  if (newname == '') {
      document.getElementById('nameerror').innerHTML = "please enter the name"
      return false;
  }
  else if (email == '') {
      ClearErrors()
      document.getElementById('emailerror').innerHTML = "please enter the Email"
      return false;
  }
  if (newGen == undefined) {
      ClearErrors()
      document.getElementById('generror').innerHTML = "please choose gender"
      return false;
  }
  else if (sethobbies == '') {
      ClearErrors()
      document.getElementById('hoberror').innerHTML = "please select hobbies"
      return false;
  }
  else if (dob == '') {
      ClearErrors()
      document.getElementById('doberror').innerHTML = "please select DOB"
      return false;
  }
  else if (con == '') {
      ClearErrors()
      document.getElementById('conerror').innerHTML = "please select country"
      return false;
  }
  else if (state == '') {
      ClearErrors()
      document.getElementById('stateerror').innerHTML = "please select state"
      return false;
  }
  else if (city == '') {
      ClearErrors()
      document.getElementById('cityerror').innerHTML = "please select city"
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