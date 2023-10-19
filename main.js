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



