
let data = [

  {
      name: 'yogesh',
      email: 'ypc@gmail.com',
      gender: 'male',
      hobbies: 'coding ',
      dob: '2010-02-18',
      country: 'India',
      state: 'Gujrat',
      city: 'surat',
      time: '11:49:25'
  },
  {
      name: 'min',
      email: 'mn@gmail.com',
      gender: 'female',
      hobbies: 'dancing singing',
      dob: '2014-12-12',
      country: 'Usa',
      state: 'California',
      city: 'elisips',
      time: '11:49:25'
  }

]


window.onload = function () {
  let ele;
  let tbody = document.getElementById('tbl')


  for (i = 0; i < data.length; i++) {
      let trData = document.createElement('tr')

      for (ele in data[i]) {
          let tdData = document.createElement('td')
          tdData.innerHTML = data[i][ele]
          trData.appendChild(tdData)
      }
      let actionTd = document.createElement("td")

      let editData = document.createElement("button")
      editData.innerHTML = "Edit"
      editData.style.backgroundColor = "#f5e1ab"
      editData.style.fontSize = '16px'

      editData.setAttribute("onclick", "editData(" + i + ")")

      let deleteData = document.createElement("button")
      deleteData.innerHTML = "Delete"
      deleteData.style.backgroundColor = "#e6d9d8"

      deleteData.setAttribute("onclick", "deleteData(" + i + ")")
      deleteData.style.fontSize = '16px'

      actionTd.appendChild(editData)
      actionTd.append(" ")
      actionTd.appendChild(deleteData)
      trData.appendChild(actionTd)

      tbody.appendChild(trData)

  }
}

