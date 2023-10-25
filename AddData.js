const form = document.querySelector('#myform')

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let newname = document.getElementById('name').value
  let email = document.getElementById('email').value

  let ch1 = document.getElementById('ch1')
  let ch2 = document.getElementById('ch2')
  let ch3 = document.getElementById('ch3')
  let dob = document.getElementById('dob').value
  let con = document.getElementById('countries').value
  let state = document.getElementById('states').value
  let city = document.getElementById('cities').value
  let time = new Date().toLocaleTimeString()
  let sethobbies = '', newGen, i;

  let getGen = document.getElementsByName('gen')
  for (i = 0; i < getGen.length; i++) {
    if (getGen[i].checked) {
      newGen = getGen[i].value
    }
  }

  if (ch1.checked == true) {
    sethobbies += ch1.value + ' '
  }
  if (ch2.checked == true) {
    sethobbies += ch2.value + ' '
  }
  if (ch3.checked == true) {
    sethobbies += ch3.value
  }

  if(checkValid(newname,email,newGen,sethobbies,dob,con,state,city)){
    data.push({
        name: newname,
        email: email,
        gender: newGen,
        hobbies: sethobbies,
        dob: dob,
        country: con,
        state: state,
        city: city,
        time: time
      })  
      showdata()
  }
})