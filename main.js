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
  let time=new Date().toLocaleTimeString()
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
    time:time
  })

  showdata()
  console.log(data)
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
      tbody.appendChild(trData)
    }
  }
}
