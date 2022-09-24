// import the data from data.js
const tableData = data;

//reference the HTML table using D3
var tbody = d3.select("tbody");

//create a function to build a table, clear the data table first with tbody.html

function buildTable(data) {
    tbody.html("");

      // add the foreach function and loop through the data, append a row for each value in row.

    data.forEach((dataRow) => {
        // Append a row to the table body
        let row = tbody.append("tr");
        // Loop through each field in the dataRow and add
        // each value as a table cell (td)
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
                cell.text(val);
            }
        );
    });
}

// Create a new function that listens to and handles what occurs after an input is given
function handleClick() {
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;

    // create an if statement for JS to check the date, if one is present return only the data with a date.
    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date);
    }
    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will
    // just be the original tableData.
    buildTable(filteredData);
    // Attach an event to listen for the form button

    // Build the table when the page loads

}
d3.selectAll("#filter-btn").on("click", handleClick);
buildTable(tableData);

