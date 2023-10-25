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
          editData.style.backgroundColor = "#f5e1ab"
          editData.style.fontSize = '16px'

          editData.setAttribute("onclick", "editData(" + i + ")")

          let deleteData = document.createElement("button")
          deleteData.innerHTML = "Delete"
          deleteData.style.backgroundColor = "#e6d9d8"
          deleteData.style.fontSize = '16px'

          deleteData.setAttribute("onclick", "deleteData(" + i + ")")


          actionTd.appendChild(editData)
          actionTd.append(" ")
          actionTd.appendChild(deleteData)
          trData.appendChild(actionTd)

          tbody.appendChild(trData)
      }
  }
}
