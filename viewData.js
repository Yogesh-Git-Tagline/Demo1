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
  