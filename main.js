//js

let data = [
  {
    name: 'ram',
    email: 'ram@gmail.com',
    gender: 'male',
    hobbies: 'dancing',
    age: 30,
    dob: '15/03/2020',
    country: 'india',
    state: 'maharastra',
    city: 'mumbai'
  },
  {
    name: 'sham',
    email: 'sham@gmail.com',
    gender: 'male',
    hobbies: 'singing',
    age: 25,
    dob: '25/05/2013',
    country: 'india',
    state: 'gujrat',
    city: 'surat'
  },

]


function showdata() {
  let i, ele;
  let tbody = document.getElementById('tbl')

  for (i = 0; i < data.length; i++) {
    let trData = document.createElement('tr')

    for (ele in data[i]) {
      let tdData = document.createElement('td')
      tdData.innerHTML = data[i][ele]
      trData.appendChild(tdData)
    }
    tbody.appendChild(trData)
  }

}

showdata()

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


window.onload = function () {
  let cont = document.getElementById("countries");
  let state = document.getElementById("states");
  let city = document.getElementById("cities");
  let setCont, setState, setCity, i;

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

}


