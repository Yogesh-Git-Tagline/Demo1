

function sort_table() {
    let sort_type = document.getElementById('sort_tbl').value

    if (sort_type == 'acending') {
        var table, rows, change, i, x, y, chg;
        table = document.getElementById("data_tbl");
        change = true;

        while (change) {

            change = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {

                chg = false;

                x = rows[i].getElementsByTagName("td")[0];
                y = rows[i + 1].getElementsByTagName("td")[0];

                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {

                    chg = true;
                    break;
                }
            }
            if (chg) {

                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                change = true;
            }
        }

    }
    else if (sort_type == 'descending') {
        var table, rows, change, i, x, y, chg;
        table = document.getElementById("data_tbl");
        change = true;

        while (change) {

            change = false;
            rows = table.rows;

            for (i = 1; i < (rows.length - 1); i++) {

                chg = false;

                x = rows[i].getElementsByTagName("td")[0];
                y = rows[i + 1].getElementsByTagName("td")[0];

                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    chg = true;
                    break;
                }
            }
            if (chg) {

                rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
                change = true;
            }
        }
    }
}