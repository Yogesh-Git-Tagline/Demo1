function editData(i) {
    let addbtn = document.getElementById("addData")
    let updatebtn = document.getElementById("upData")

    updatebtn.setAttribute("onclick", "updatedata(" + i + ")")

    addbtn.style.display = 'none'
    updatebtn.style.display = 'block'
    let cancelbtn = document.getElementById("resetbtn")
    cancelbtn.style.display = "block"
    document.getElementById("myform").reset();
    cancelbtn.onclick = function () {
        this.style.display = 'none'
        updatebtn.style.display = 'none'
        addbtn.style.display = 'block'
    }

    document.getElementById("name").value = data[i].name
    document.getElementById("email").value = data[i].email


    if (data[i].gender == 'male') {
        document.getElementById('male').checked = true
    }
    if (data[i].gender == 'female') {
        document.getElementById('female').checked = true
    }


    if (data[i].hobbies == 'coding ') {
        document.getElementById("ch1").checked = true
    }
    else if (data[i].hobbies == 'dancing ') {
        document.getElementById("ch2").checked = true
    }
    else if (data[i].hobbies == 'singing') {
        document.getElementById("ch3").checked = true
    }

    else if (data[i].hobbies == 'coding dancing singing') {
        document.getElementById("ch1").checked = true
        document.getElementById("ch2").checked = true
        document.getElementById("ch3").checked = true
    }
    else if (data[i].hobbies == 'coding dancing ') {
        document.getElementById("ch1").checked = true
        document.getElementById("ch2").checked = true
    }
    else if (data[i].hobbies == 'coding singing') {
        document.getElementById("ch1").checked = true
        document.getElementById("ch3").checked = true
    }
    else if (data[i].hobbies == 'dancing singing') {
        document.getElementById("ch2").checked = true
        document.getElementById("ch3").checked = true
    }


    document.getElementById("dob").value = data[i].dob

    document.getElementById("countries").value = data[i].country
    document.getElementById("states").value = data[i].state
    document.getElementById("cities").value = data[i].city


}

let new_data = []

function updatedata(i) {
    let new_name = document.getElementById('name').value
    let new_email = document.getElementById('email').value

    let getGen = document.getElementsByName('gen'), gn, newGen;
    for (gn = 0; gn < getGen.length; gn++) {
        if (getGen[gn].checked) {
            newGen = getGen[gn].value
        }
    }

    let new_hobbies = ""

    let hobbie1 = document.getElementById('ch1')
    let hobbie2 = document.getElementById('ch2')
    let hobbie3 = document.getElementById('ch3')

    if (hobbie1.checked == true) {
        new_hobbies += hobbie1.value + ' '
    }
    if (hobbie2.checked == true) {
        new_hobbies += hobbie2.value + ' '
    }
    if (hobbie3.checked == true) {
        new_hobbies += hobbie3.value
    }

    let new_dob = document.getElementById('dob').value
    
    let new_country = document.getElementById('countries').value
    let new_state = document.getElementById('states').value
    let new_city = document.getElementById('cities').value



    if (new_name != '' && new_email != '' && getGen != '' && new_hobbies != '' && new_dob != '' && new_country != '' && new_state != '' && new_city != '') {
        new_data = data.map(dt => {

            if (dt.name === data[i].name) {
                dt.name = new_name;
                dt.email = new_email;
                dt.gender = newGen;
                dt.hobbies = new_hobbies;
                dt.dob = new_dob;
                dt.country = new_country;
                dt.state = new_state;
                dt.city = new_city
            }
            let addbtn = document.getElementById("addData")
            let updatebtn = document.getElementById("upData")
            let cancelbtn = document.getElementById("resetbtn")
            updatebtn.style.display = 'none'
            cancelbtn.style.display = 'none'
            addbtn.style.display = 'block'
            document.getElementById('myform').reset();
            return dt;
        });
    }
    else {
        alert('please fill all required field')
        return false;
    }


    document.getElementById("tbl").innerHTML = ""
    showNewdata(new_data)
}

function showNewdata(new_data) {
    let element;
    let tbody = document.getElementById('tbl')

    for (i = 0; i < new_data.length; i++) {
        let trData = document.createElement('tr')

        for (element in data[i]) {
            let tdData = document.createElement('td')
            tdData.innerHTML = new_data[i][element]
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