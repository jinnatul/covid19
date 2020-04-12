window.onload = function () {
    
    var Chart_pie = new CanvasJS.Chart("chart_pie", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "COVID-19"
        },
        data: [{
            type: "pie",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel: "{label} - {y}",
            dataPoints: [
                { y: 621, label: "Coronavirus cases" },
                { y: 34, label: "Total Deaths" },
                { y: 39, label: "Total Recovered" }
            ]
        }]
    });

    var Chart_doughnut = new CanvasJS.Chart("chart_doughnut", {
        theme: "light1",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Test Info BD"
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
                { y: 9653, name: "Total Test" },
                { y: 621, name: "Coronavirus cases" },
                { y: 34, name: "Total Deaths" },
                { y: 39, name: "Total Recovered" }
            ]
        }]
    });
    

    var Chart_spline = new CanvasJS.Chart("chart_spline", {
        animationEnabled: true,
        title:{
            text: "COVID-19 Positive in Bangladesh"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        axisY: {
            title: "Number of Cases",
            includeZero: false
        },
        data: [{
            type: "spline",
            xValueFormatString: "DD MMM",
            color: "#F08080",
            dataPoints: [
                { x: new Date(2020, 2, 08), y:  3 },
                { x: new Date(2020, 2, 09), y:  0 },
                { x: new Date(2020, 2, 10), y:  0 },
                { x: new Date(2020, 2, 11), y:  0 },
                { x: new Date(2020, 2, 12), y:  0 },
                { x: new Date(2020, 2, 13), y:  0 },
                { x: new Date(2020, 2, 14), y:  2 },
                { x: new Date(2020, 2, 15), y:  0 },
                { x: new Date(2020, 2, 16), y:  3 },
                { x: new Date(2020, 2, 17), y:  2 },
                { x: new Date(2020, 2, 18), y:  4 },
                { x: new Date(2020, 2, 19), y:  4 },
                { x: new Date(2020, 2, 20), y:  2 },
                { x: new Date(2020, 2, 21), y:  4 },
                { x: new Date(2020, 2, 22), y:  3 },
                { x: new Date(2020, 2, 23), y:  6 },
                { x: new Date(2020, 2, 24), y:  6 },
                { x: new Date(2020, 2, 25), y:  0 },
                { x: new Date(2020, 2, 26), y:  5 },
                { x: new Date(2020, 2, 27), y:  4 },
                { x: new Date(2020, 2, 28), y:  0 },
                { x: new Date(2020, 2, 29), y:  0 },
                { x: new Date(2020, 2, 30), y:  1 },
                { x: new Date(2020, 2, 31), y:  2 },
                { x: new Date(2020, 3, 1), y:  3 },
                { x: new Date(2020, 3, 2), y:  2 },
                { x: new Date(2020, 3, 3), y:  5 },
                { x: new Date(2020, 3, 4), y:  9 },
                { x: new Date(2020, 3, 5), y:  18 },
                { x: new Date(2020, 3, 6), y:  35 },
                { x: new Date(2020, 3, 7), y:  41 },
                { x: new Date(2020, 3, 8), y:  54 },
                { x: new Date(2020, 3, 9), y:  112 },
                { x: new Date(2020, 3, 10), y:  94 },
                { x: new Date(2020, 3, 11), y:  58 },
                { x: new Date(2020, 3, 12), y:  139 }
            ]
        }]
    });
    

    Chart_pie.render();
    Chart_doughnut.render();
    Chart_spline.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}