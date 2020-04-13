window.onload = function () {
    
    // Pie Chart
    var Chart_pie = new CanvasJS.Chart("chart_pie", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "COVID-19 Total"
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
                { y: 803, label: "Coronavirus cases" },
                { y: 39, label: "Deaths" },
                { y: 42, label: "Recovered" }
            ]
        }]
    });

    // Doughnut Chart
    var Chart_doughnut = new CanvasJS.Chart("chart_doughnut", {
        theme: "light1",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: "Tests in Bangladesh"
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
                { y: 11223, name: "Total Test" },
                { y: 803, name: "Coronavirus cases" },
                { y: 39, name: "Deaths" },
                { y: 42, name: "Recovered" }
            ]
        }]
    });
    
    // Spline Chart
    var Chart_spline = new CanvasJS.Chart("chart_spline", {
        animationEnabled: true,
        title:{
            text: "COVID-19 Positives in Bangladesh"
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
                { x: new Date(2020, 3, 12), y:  139 },
                { x: new Date(2020, 3, 13), y:  182 }
            ]
        }]
    });
    

    // Line Chart
    var Chart_line = new CanvasJS.Chart("chart_line", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        animationEnabled: true,
        title:{
            text: "COVID-19 Deaths in Bangladesh"   
        },
        axisX: {
            valueFormatString: "DD MMM"
        },
        axisY:{
            includeZero: false
        },
        data: [{        
            type: "line",
            markerSize: 12,
            xValueFormatString: "DD MMM",
            yValueFormatString: "###",
            dataPoints: [        
                { x: new Date(2020, 02, 8), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 9) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 10), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 11) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 12), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 13) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 14), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 15) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 16), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 17) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 18), y: 1, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 02, 19) , y: 0, indexLabel: "down", markerType: "cross", markerColor: "#6B8E23" },
                { x: new Date(2020, 02, 20), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 21) , y: 1, indexLabel: "up", markerType: "triangle", markerColor: "tomato" },
                { x: new Date(2020, 02, 22), y: 0, indexLabel: "down", markerType: "cross",  markerColor: "#6B8E23" },
                { x: new Date(2020, 02, 23) , y: 1, indexLabel: "up", markerType: "triangle", markerColor: "tomato" },
                { x: new Date(2020, 02, 24), y: 1, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 02, 25) , y: 0, indexLabel: "down", markerType: "cross", markerColor: "#6B8E23" },
                { x: new Date(2020, 02, 26), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 27) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 28), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 29) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 02, 30), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 02, 31) , y: 0, indexLabel: "", markerType: "", markerColor: "green" },
                { x: new Date(2020, 03, 1), y: 1, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 03, 2) , y: 0, indexLabel: "down", markerType: "cross", markerColor: "#6B8E23" },
                { x: new Date(2020, 03, 3), y: 0, indexLabel: "", markerType: "",  markerColor: "green" },
                { x: new Date(2020, 03, 4) , y: 1, indexLabel: "up", markerType: "triangle", markerColor: "tomato" },
                { x: new Date(2020, 03, 5), y: 1, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 03, 6) , y: 3, indexLabel: "up", markerType: "triangle", markerColor: "tomato" },
                { x: new Date(2020, 03, 7), y: 5, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 03, 8) , y: 3, indexLabel: "down", markerType: "cross", markerColor: "#6B8E23" },
                { x: new Date(2020, 03, 9), y: 1, indexLabel: "down", markerType: "cross",  markerColor: "#6B8E23" },
                { x: new Date(2020, 03, 10) , y: 6, indexLabel: "up", markerType: "triangle", markerColor: "tomato" },
                { x: new Date(2020, 03, 11), y: 3, indexLabel: "down", markerType: "cross",  markerColor: "#6B8E23" },
                { x: new Date(2020, 03, 12), y: 4, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" },
                { x: new Date(2020, 03, 13), y: 5, indexLabel: "up", markerType: "triangle",  markerColor: "tomato" }
            ]
        }]
    });


    // Area Chart
    var Chart_area = new CanvasJS.Chart("chart_area", {
        animationEnabled: true,
        title:{
            text: "COVID-19 Total Positive"
        },
        axisX:{
            valueFormatString: "DD MMM",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisY: {
            title: "",
            includeZero: false,
            valueFormatString: "##0",
            crosshair: {
                enabled: true,
                snapToDataPoint: true,
                labelFormatter: function(e) {
                    return  CanvasJS.formatNumber(e.value, "##0");
                }
            }
        },
        data: [{
            type: "area",
            xValueFormatString: "DD MMM",
            yValueFormatString: "##0",
            dataPoints: [
                { x: new Date(2020, 2, 08), y:  3 },
                { x: new Date(2020, 2, 09), y:  3 },
                { x: new Date(2020, 2, 10), y:  3 },
                { x: new Date(2020, 2, 11), y:  3 },
                { x: new Date(2020, 2, 12), y:  3 },
                { x: new Date(2020, 2, 13), y:  3 },
                { x: new Date(2020, 2, 14), y:  5 },
                { x: new Date(2020, 2, 15), y:  5 },
                { x: new Date(2020, 2, 16), y:  8 },
                { x: new Date(2020, 2, 17), y:  10 },
                { x: new Date(2020, 2, 18), y:  14 },
                { x: new Date(2020, 2, 19), y:  18 },
                { x: new Date(2020, 2, 20), y:  20 },
                { x: new Date(2020, 2, 21), y:  24 },
                { x: new Date(2020, 2, 22), y:  27 },
                { x: new Date(2020, 2, 23), y:  33 },
                { x: new Date(2020, 2, 24), y:  39 },
                { x: new Date(2020, 2, 25), y:  39 },
                { x: new Date(2020, 2, 26), y:  44 },
                { x: new Date(2020, 2, 27), y:  48 },
                { x: new Date(2020, 2, 28), y:  48 },
                { x: new Date(2020, 2, 29), y:  48 },
                { x: new Date(2020, 2, 30), y:  49 },
                { x: new Date(2020, 2, 31), y:  51 },
                { x: new Date(2020, 3, 1), y:  54 },
                { x: new Date(2020, 3, 2), y:  56 },
                { x: new Date(2020, 3, 3), y:  61 },
                { x: new Date(2020, 3, 4), y:  70 },
                { x: new Date(2020, 3, 5), y:  88 },
                { x: new Date(2020, 3, 6), y:  123 },
                { x: new Date(2020, 3, 7), y:  164 },
                { x: new Date(2020, 3, 8), y:  218 },
                { x: new Date(2020, 3, 9), y:  330 },
                { x: new Date(2020, 3, 10), y:  424 },
                { x: new Date(2020, 3, 11), y:  482 },
                { x: new Date(2020, 3, 12), y:  621 },
                { x: new Date(2020, 3, 13), y:  803 }
            ]
        }]
    });
    

    // Bar Chart
    var Chart_bar = new CanvasJS.Chart("chart_bar", {
        animationEnabled: true,
        title:{
            text: "Cases in Bangladesh"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        data: [{
            type: "bar",
            xValueFormatString: "DD MMM",
            color: "#F08080",
            dataPoints: [
            { x: new Date(2020, 2, 08), y:  3 },
                { x: new Date(2020, 2, 09), y:  3 },
                { x: new Date(2020, 2, 10), y:  3 },
                { x: new Date(2020, 2, 11), y:  3 },
                { x: new Date(2020, 2, 12), y:  3 },
                { x: new Date(2020, 2, 13), y:  3 },
                { x: new Date(2020, 2, 14), y:  5 },
                { x: new Date(2020, 2, 15), y:  5 },
                { x: new Date(2020, 2, 16), y:  8 },
                { x: new Date(2020, 2, 17), y:  10 },
                { x: new Date(2020, 2, 18), y:  14 },
                { x: new Date(2020, 2, 19), y:  18 },
                { x: new Date(2020, 2, 20), y:  20 },
                { x: new Date(2020, 2, 21), y:  24 },
                { x: new Date(2020, 2, 22), y:  27 },
                { x: new Date(2020, 2, 23), y:  33 },
                { x: new Date(2020, 2, 24), y:  39 },
                { x: new Date(2020, 2, 25), y:  39 },
                { x: new Date(2020, 2, 26), y:  44 },
                { x: new Date(2020, 2, 27), y:  48 },
                { x: new Date(2020, 2, 28), y:  48 },
                { x: new Date(2020, 2, 29), y:  48 },
                { x: new Date(2020, 2, 30), y:  49 },
                { x: new Date(2020, 2, 31), y:  51 },
                { x: new Date(2020, 3, 1), y:  54 },
                { x: new Date(2020, 3, 2), y:  56 },
                { x: new Date(2020, 3, 3), y:  61 },
                { x: new Date(2020, 3, 4), y:  70 },
                { x: new Date(2020, 3, 5), y:  88 },
                { x: new Date(2020, 3, 6), y:  123 },
                { x: new Date(2020, 3, 7), y:  164 },
                { x: new Date(2020, 3, 8), y:  218 },
                { x: new Date(2020, 3, 9), y:  330 },
                { x: new Date(2020, 3, 10), y:  424 },
                { x: new Date(2020, 3, 11), y:  482 },
                { x: new Date(2020, 3, 12), y:  621 },
                { x: new Date(2020, 3, 13), y:  803 }
            ]
        }]
    });

    Chart_pie.render();
    Chart_doughnut.render();
    Chart_spline.render();
    Chart_line.render();
    Chart_area.render();
    Chart_bar.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}