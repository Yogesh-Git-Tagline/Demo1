function searchData() {
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