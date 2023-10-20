//js

let data = [


]



const CountryCityState = {
  "India": {
    "Gujrat": ["surat", "ahamdabad", "rajkot"],
    "Maharastra": ["Mumbai", "Pune"]
  },
  "Usa": {
    "California": ["elisips", "doriyon"],
    "Seritina": ["provine", "coirops"]
  }
}


let cont = document.getElementById("countries");
let state = document.getElementById("states");
let city = document.getElementById("cities");
let setCont, setState, setCity;

for (setCont in CountryCityState) {
  cont.options[cont.options.length] = new Option(setCont, setCont);
}

cont.onchange = function () {
  state.length = 1;
  city.length = 1;

  for (setState in CountryCityState[this.value]) {
    state.options[state.options.length] = new Option(setState, setState);
  }
}

state.onchange = function () {
  city.length = 1;
  setCity = CountryCityState[cont.value][this.value];

  for (i = 0; i < setCity.length; i++) {
    city.options[city.options.length] = new Option(setCity[i], setCity[i]);
  }
}


const form = document.querySelector('#myform')

form.addEventListener("submit", (e) => {
  e.preventDefault()

  let name = document.getElementById('name').value
  let email = document.getElementById('email').value

  let ch1 = document.getElementById('ch1')
  let ch2 = document.getElementById('ch2')
  let ch3 = document.getElementById('ch3')
  let age = document.getElementById('age').value
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
    sethobbies += ch1.value + ','
  }
  if (ch2.checked == true) {
    sethobbies += ch2.value + ','
  }
  if (ch3.checked == true) {
    sethobbies += ch3.value
  }

  //validation
  if (name == '') {
    document.getElementById('error').innerHTML = "plz enter the name"
    return false;
  }
  else if (email == '') {
    document.getElementById('error').innerHTML = "plz enter the Email"
    return false;
  }
  else if (newGen == undefined) {
    document.getElementById('error').innerHTML = "plz choose gender"
    return false;
  }
  else if (sethobbies == '') {
    document.getElementById('error').innerHTML = "plz select hobbies"
    return false;
  }
  else if (age == '') {
    document.getElementById('error').innerHTML = "plz enter Age"
    return false;
  }
  else if (dob == '') {
    document.getElementById('error').innerHTML = "plz select DOB"
    return false;
  }
  else if (con == '') {
    document.getElementById('error').innerHTML = "plz select country"
    return false;
  }
  else if (state == '') {
    document.getElementById('error').innerHTML = "plz select state"
    return false;
  }
  else if (city == '') {
    document.getElementById('error').innerHTML = "plz select city"
    return false;
  }


  data.push({
    name: name,
    email: email,
    gender: newGen,
    hobbies: sethobbies,
    age: age,
    dob: dob,
    country: con,
    state: state,
    city: city,
    time: time
  })

  showdata()

})

function showdata() {
  let ele;
  let tbody = document.getElementById('tbl')

  for (i = 0; i < data.length; i++) {
    let trData = document.createElement('tr')

    if (i === data.length - 1) {
      for (ele in data[i]) {
        let tdData = document.createElement('td')
        tdData.innerHTML = data[i][ele]
        trData.appendChild(tdData)
      }
      let actionTd = document.createElement("td")

      let editData = document.createElement("button")
      editData.innerHTML = "Edit"

      editData.setAttribute("onclick", "editData(" + i + ")")

      let deleteData = document.createElement("button")
      deleteData.innerHTML = "Delete"

      deleteData.setAttribute("onclick", "deleteData(" + i + ")")

      actionTd.appendChild(editData)
      actionTd.appendChild(deleteData)
      trData.appendChild(actionTd)

      tbody.appendChild(trData)
    }
  }
}

function editData(i) {
  let btn = document.getElementById("addData")
  let updatebtn = document.getElementById("upData")

  updatebtn.setAttribute("onclick", "updatedata(" + i + ")")

  btn.style.display = 'none'
  updatebtn.style.display = 'block'
  let rebtn = document.getElementById("resetbtn")
  rebtn.style.display = "block"
  rebtn.onclick = function () {
    this.style.display = 'none'
    updatebtn.style.display = 'none'
    btn.style.display = 'block'
  }



  document.getElementById("name").value = data[i].name
  document.getElementById("email").value = data[i].email

  let radioButtons = document.querySelectorAll('input[type="radio"]')
  for (let a = 0; a < radioButtons.length; a++) {
    if (radioButtons[a].checked = true) {
      radioButtons[a].checked = false;
    }
  }

  let hob = document.querySelectorAll('input[type="checkbox"]')
  for (let a = 0; a < hob.length; a++) {
    if (hob[a].checked = true) {
      hob[a].checked = false;
    }
  }

  document.getElementById("age").value = data[i].age
  document.getElementById("dob").value = data[i].dob
  document.getElementById("countries").value = data[i].country
  document.getElementById("states").value = data[i].state
  document.getElementById("cities").value = data[i].city

}

let new_data = []

function updatedata(i) {
  let nm = document.getElementById('name').value
  let em = document.getElementById('email').value

  let getGen = document.getElementsByName('gen'), gn, newGen;
  for (gn = 0; gn < getGen.length; gn++) {
    if (getGen[gn].checked) {
      newGen = getGen[gn].value
    }
  }

  let up_hobbies = ""

  let ch1 = document.getElementById('ch1')
  let ch2 = document.getElementById('ch2')
  let ch3 = document.getElementById('ch3')

  if (ch1.checked == true) {
    up_hobbies += ch1.value + ','
  }
  if (ch2.checked == true) {
    up_hobbies += ch2.value + ','
  }
  if (ch3.checked == true) {
    up_hobbies += ch3.value
  }

  let ag = document.getElementById('age').value
  let db = document.getElementById('dob').value
  let con = document.getElementById('countries').value
  let stat = document.getElementById('states').value
  let ct = document.getElementById('cities').value


  new_data = data.map(dt => {

    if (dt.name === data[i].name) {
      dt.name = nm;
      dt.email = em;
      dt.gender = newGen;
      dt.hobbies = up_hobbies;
      dt.age = ag;
      dt.dob = db;
      dt.country = con;
      dt.state = stat;
      dt.city = ct
    }
    return dt;
  });


  document.getElementById("tbl").innerHTML = ""
  showNewdata(new_data)
}

function showNewdata(new_data) {
  let ele;
  let tbody = document.getElementById('tbl')

  for (i = 0; i < new_data.length; i++) {
    let trData = document.createElement('tr')

    for (ele in data[i]) {
      let tdData = document.createElement('td')
      tdData.innerHTML = new_data[i][ele]
      trData.appendChild(tdData)
    }
    let actionTd = document.createElement("td")

    let editData = document.createElement("button")
    editData.innerHTML = "Edit"

    editData.setAttribute("onclick", "editData(" + i + ")")

    let deleteData = document.createElement("button")
    deleteData.innerHTML = "Delete"

    deleteData.setAttribute("onclick", "deleteData(" + i + ")")

    actionTd.appendChild(editData)
    actionTd.appendChild(deleteData)
    trData.appendChild(actionTd)

    tbody.appendChild(trData)

  }
}

function deleteData(i) {
  data.splice(i, 1)
  document.getElementById("tbl").innerHTML = ""
  showNewdata(data)
}

//serach

function myFunction() {
  let getname, tbl, tr, td, i, setname;

  getname = document.getElementById("srname").value;

  tbl = document.getElementById("data_tbl");

  tr = tbl.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      setname = td.innerText;
      if (setname.indexOf(getname) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}