
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
      country: 'India',
      state: 'Maharastra',
      city: 'mumbai',
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
  
  