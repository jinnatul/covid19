window.onload = function () {
    let apiURL = "https://jinnatul.github.io/Kid-Projects/covidBD/bdcovid.json";
  
    let covid_Infected_Array = [];
    let covid_Deaths_Array = [];
    let covid_Recovered_Array = [];
    let covid_Deaths_Daily = [];
    let covid_Positive_Daily = [];
    let covid_Recovered_Daily = [];
    let covid_DailyTest = [];

    $.get(apiURL, function() {})
        .done(function(res) {
            let sizeResponse = res.length;
            for (let index = 0; index < sizeResponse; index++) {
                // Total covid bd data
                covid_Infected_Array.push({ x: new Date(res[index]["Date"]), y: res[index]["Total_Positive"]});
                covid_Deaths_Array.push({ x: new Date(res[index]["Date"]), y: res[index]["Total_Deaths"]});
                covid_Recovered_Array.push({ x: new Date(res[index]["Date"]), y: res[index]["Total_Recovered"]});

                // Daily deaths & positive cases
                covid_Positive_Daily.push({ x: new Date(res[index]["Date"]), y: res[index]["Today_Positive"] });
                covid_Deaths_Daily.push({ x: new Date(res[index]["Date"]), y: res[index]["Today_Deaths"] });
                covid_Recovered_Daily.push({ x: new Date(res[index]["Date"]), y: res[index]["Today_Recovered"] });

                // Daily Test vs Cases
                covid_DailyTest.push({ x: new Date(res[index]["Date"]), y:  res[index]["Today_Tests"] });
            }
            setMake_BD_Table(res);
            setCovid_Info(covid_Infected_Array, covid_Deaths_Array, covid_Recovered_Array);
            setPercent_chart(
                res[sizeResponse - 1]["Total_Positive"], 
                res[sizeResponse - 1]["Total_Deaths"], 
                res[sizeResponse - 1]["Total_Recovered"]);
            
            setRecovered_chart(covid_Recovered_Daily);
            setInfected_chart(covid_Positive_Daily);
            setDeath_chart(covid_Deaths_Daily);
            setDaily_Test_vs_Positive_Cases(covid_DailyTest, covid_Positive_Daily);
         })
        .fail(function () {
            M.toast({html: 'Internal Problem!!!'})
        });    
}



/********* Dynamic /API Section *********/
// Total Positive vs Deaths vs Recovered

function setMake_BD_Table(res) {
    let bd_table = "<table class='highlight'><tr><th>Date</th><th>Today Tests</th><th>Today Positive</th>";
        bd_table += "<th>Today Deaths</th><th>Today Recovered</th><th>Total positives</th>";
        bd_table += "<th>Total Deaths</th><th>Total Recovered</th></tr><tbody>";
    for (let index = res.length - 1; index >= 0; index--) {
        bd_table += "<tr><td>"+res[index]["Date"]+"</td>"+ 
            "<td>"+res[index]["Today_Tests"]+"</td>"+
            "<td>"+res[index]["Today_Positive"]+"</td>"+
            "<td>"+res[index]["Today_Deaths"]+"</td>"+
            "<td>"+res[index]["Today_Recovered"]+"</td>"+
            "<td>"+res[index]["Total_Positive"]+"</td>"+
            "<td>"+res[index]["Total_Deaths"]+"</td>"+
            "<td>"+res[index]["Total_Recovered"]+"</td></tr>"
    }
    bd_table += "</tbody></table>";
    $("#bd_Track_Info").html(bd_table);
}

function setCovid_Info(covid_Infected_Array, covid_Deaths_Array, covid_Recovered_Array) {
    var Chart_covid = new CanvasJS.Chart("chart_covid", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
          text: "COVID-19 timeline in Bangladesh",
        },
        axisX: {
          valueFormatString: "DD MMM",
        },
        axisY: {
          title: "Number of People",
        },
        legend: {
          verticalAlign: "top",
          horizontalAlign: "right",
          dockInsidePlotArea: true,
        },
        toolTip: {
          shared: true,
        },
        data: [
          {
            name: "Infected",
            showInLegend: true,
            legendMarkerType: "circle",
            type: "spline",
            color: "#64b5f6",
            markerSize: 0,
            dataPoints: covid_Infected_Array,
          },
          {
            name: "Deaths",
            showInLegend: true,
            legendMarkerType: "circle",
            type: "spline",
            color: "#d50000",
            markerSize: 0,
            dataPoints: covid_Deaths_Array,
          },
          {
            name: "Recovered",
            showInLegend: true,
            legendMarkerType: "circle",
            type: "spline",
            color: "#43a047",
            markerSize: 0,
            dataPoints: covid_Recovered_Array,
          },
        ],
    });
    Chart_covid.render();
}

// Coronavirus_cases vs Deaths vs Recovered
function setPercent_chart(Coronavirus_cases, Deaths, Recovered) {
    var Chart_doughnut = new CanvasJS.Chart("chart_doughnut", {
        theme: "light1",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Attack Percent(%) in BD"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "doughnut",
            innerRadius: 90,
            showInLegend: true,
            toolTipContent: "<b>{name}</b>: {y} (#percent%)",
            indexLabel: "{name} - #percent%",
            dataPoints: [
                { y: Coronavirus_cases, name: "Coronavirus cases" },
                { y: Deaths, name: "Deaths" },
                { y: Recovered, name: "Recovered" }
             ]
        }]
    });
    Chart_doughnut.render();
}
function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}

 // Daily Recover cases
 function setRecovered_chart(covid_Recovered_Daily) {
    var Chart_Recovered_Timeline = new CanvasJS.Chart("chart_Recovered_Timeline", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        title:{
            text: "Recovered Timeline"   
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "column",
            markerSize: 12,
            xValueFormatString: "DD MMM",
            yValueFormatString: "###",
            color: "green",
            dataPoints: covid_Recovered_Daily
        }]
    });
    Chart_Recovered_Timeline.render();
}

// Daily Positive cases
function setInfected_chart(covid_Positive_Daily) {
    var Chart_spline = new CanvasJS.Chart("chart_spline", {
        animationEnabled: true,
        title:{
            text: "Positives Timeline"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Number of Cases",
            includeZero: false
        },
        data: [{
            type: "column",
            xValueFormatString: "DD MMM",
            color: "#0288d1",
            dataPoints: covid_Positive_Daily
        }]
    });
    Chart_spline.render();
}

 // Daily Deaths cases
function setDeath_chart(covid_Deaths_Daily) {
    var Chart_line = new CanvasJS.Chart("chart_line", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        title:{
            text: "Deaths Timeline"   
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "column",
            markerSize: 12,
            xValueFormatString: "DD MMM",
            yValueFormatString: "###",
            color: "#de4536",
            dataPoints: covid_Deaths_Daily
        }]
    });
    Chart_line.render();
}

//Daily Test vs Positive Cases
function setDaily_Test_vs_Positive_Cases(dailyTest, dailyPositive) {
    var Chart_TestVsPositive = new CanvasJS.Chart("chart_TestVsPositive", {
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "Daily Test vs Positive Cases",
        },
        axisX: {
            valueFormatString: "DD MMM",
        },
        legend: {
            verticalAlign: "top",
            horizontalAlign: "right",
            dockInsidePlotArea: true,
        },
        toolTip: {
            shared: true,
        },
        data: [
            {
                name: "Tests",
                showInLegend: true,
                legendMarkerType: "circle",
                type: "spline",
                color: "blue",
                markerSize: 0,
                dataPoints: dailyTest,
            },
            {
                name: "Positive",
                showInLegend: true,
                legendMarkerType: "circle",
                type: "spline",
                color: "#d50000",
                markerSize: 0,
                dataPoints: dailyPositive,
            }
        ],
    });
    Chart_TestVsPositive.render();
}