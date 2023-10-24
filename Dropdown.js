const CountryCityState = {
    "India": {
      "Gujrat": ["surat", "ahamdabad", "rajkot"],
      "Maharastra": ["mumbai", "pune"]
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