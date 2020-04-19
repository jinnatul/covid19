$(function() {
    let districtAPI_URL = "https://corona-bd.herokuapp.com/district"

    $.get(districtAPI_URL, function() {})
        .done(function(res) {
            let districtCasesArray = [];
            for (let index = 0; index < res["data"].length; index++) {
                districtCasesArray.push({ y: res["data"][index]["count"], label: res["data"][index]["name"] });
            }
            //console.log(districtCasesArray)     
            setDistrictChart(districtCasesArray);       
        })
        .fail(function () {
            API_Fail_Then_loadDistrict();
        })
})

//  Column Chart District cases
function setDistrictChart(districtCasesArray) {
    $('#districtCount').text("Affected District: " + (districtCasesArray.length - 2));
    var Chart_District_Cases = new CanvasJS.Chart("chart_District_Cases", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        data: [{
            type: "spline",
            startAngle: 25,
            color: "#d50000",
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            dataPoints: districtCasesArray
        }]
    });
    Chart_District_Cases.render();
}

function API_Fail_Then_loadDistrict() {
    $('#districtCount').text("Affected District: 50");
    let districtCasesArray = [];
    for (let index = 0; index < positiveNumbers.length; index++) {
        districtCasesArray.push({ y: positiveNumbers[index], label: districtName[index]})
    }    
    var Chart_District_Cases = new CanvasJS.Chart("chart_District_Cases", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        data: [{
            type: "spline",
            startAngle: 25,
            color: "#d50000",
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            dataPoints: districtCasesArray
        }]
    });
    Chart_District_Cases.render();
}