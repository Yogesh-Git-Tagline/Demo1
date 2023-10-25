function deleteData(i) {
    data.splice(i, 1)
    document.getElementById("tbl").innerHTML = ""
    showNewdata(data)
  }