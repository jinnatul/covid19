window.onload = function () {
    
    // Column Chart Division wise Cases
    var Chart_pie = new CanvasJS.Chart("chart_pie", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text:  "Division wise cases in BD"
        },
        data: [{
            type: "column",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            indexLabel:  "{y}",
            dataPoints: [
                { y: 529, label: "Dhaka" },
                { y: 33, label: "Chattagram" },
                { y: 15, label: "Rangpur" },
                { y: 14, label: "Mymensingh" },
                { y: 3, label: "Sylhet" },
                { y: 7, label: "Barishal" },
                { y: 1, label: "Khulna" } 
            ]
        }]
    });

    // Doughnut Chart Corona %
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
                { y: 803, name: "Coronavirus cases" },
                { y: 39, name: "Deaths" },
                { y: 42, name: "Recovered" }
             ]
        }]
    });
    
    // Spline Chart Daily Positive cases
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
    

    // Line Chart Daily Deaths
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


    // // Area Chart
    // var Chart_area = new CanvasJS.Chart("chart_area", {
    //     animationEnabled: true,
    //     title:{
    //         text: "COVID-19 Total Positive"
    //     },
    //     axisX:{
    //         valueFormatString: "DD MMM",
    //         crosshair: {
    //             enabled: true,
    //             snapToDataPoint: true
    //         }
    //     },
    //     axisY: {
    //         title: "",
    //         includeZero: false,
    //         valueFormatString: "##0",
    //         crosshair: {
    //             enabled: true,
    //             snapToDataPoint: true,
    //             labelFormatter: function(e) {
    //                 return  CanvasJS.formatNumber(e.value, "##0");
    //             }
    //         }
    //     },
    //     data: [{
    //         type: "area",
    //         xValueFormatString: "DD MMM",
    //         yValueFormatString: "##0",
    //         dataPoints: [
    //             { x: new Date(2020, 2, 08), y:  3 },
    //             { x: new Date(2020, 2, 09), y:  3 },
    //             { x: new Date(2020, 2, 10), y:  3 },
    //             { x: new Date(2020, 2, 11), y:  3 },
    //             { x: new Date(2020, 2, 12), y:  3 },
    //             { x: new Date(2020, 2, 13), y:  3 },
    //             { x: new Date(2020, 2, 14), y:  5 },
    //             { x: new Date(2020, 2, 15), y:  5 },
    //             { x: new Date(2020, 2, 16), y:  8 },
    //             { x: new Date(2020, 2, 17), y:  10 },
    //             { x: new Date(2020, 2, 18), y:  14 },
    //             { x: new Date(2020, 2, 19), y:  18 },
    //             { x: new Date(2020, 2, 20), y:  20 },
    //             { x: new Date(2020, 2, 21), y:  24 },
    //             { x: new Date(2020, 2, 22), y:  27 },
    //             { x: new Date(2020, 2, 23), y:  33 },
    //             { x: new Date(2020, 2, 24), y:  39 },
    //             { x: new Date(2020, 2, 25), y:  39 },
    //             { x: new Date(2020, 2, 26), y:  44 },
    //             { x: new Date(2020, 2, 27), y:  48 },
    //             { x: new Date(2020, 2, 28), y:  48 },
    //             { x: new Date(2020, 2, 29), y:  48 },
    //             { x: new Date(2020, 2, 30), y:  49 },
    //             { x: new Date(2020, 2, 31), y:  51 },
    //             { x: new Date(2020, 3, 1), y:  54 },
    //             { x: new Date(2020, 3, 2), y:  56 },
    //             { x: new Date(2020, 3, 3), y:  61 },
    //             { x: new Date(2020, 3, 4), y:  70 },
    //             { x: new Date(2020, 3, 5), y:  88 },
    //             { x: new Date(2020, 3, 6), y:  123 },
    //             { x: new Date(2020, 3, 7), y:  164 },
    //             { x: new Date(2020, 3, 8), y:  218 },
    //             { x: new Date(2020, 3, 9), y:  330 },
    //             { x: new Date(2020, 3, 10), y:  424 },
    //             { x: new Date(2020, 3, 11), y:  482 },
    //             { x: new Date(2020, 3, 12), y:  621 },
    //             { x: new Date(2020, 3, 13), y:  803 }
    //         ]
    //     }]
    // });
    

    // Bar Chart Total positive cases
    var Chart_bar = new CanvasJS.Chart("chart_bar", {
        animationEnabled: true,
        title:{
            text: "Total Cases in Bangladesh"
        },
        axisX:{
            valueFormatString: "DD MMM"
        },
        data: [{
            type: "column",
            xValueFormatString: "DD MMM",
            color: "red",
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


    // Column Chart Dhaka area cases
    var Chart_column = new CanvasJS.Chart("chart_column", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "COVID-19 in Dhaka"
        },
        data: [{
            type: "column",
            startAngle: 25,
            toolTipContent: "<b>{label}</b>: {y}",
            showInLegend: "true",
            legendText: "{label}",
            indexLabelFontSize: 16,
            dataPoints: [
                { y: 1, label: "Adabor" },
                { y: 2, label: "Agargaon" },
                { y: 1, label: "Ashkona" },
                { y: 2, label: "Azimpur" },
                { y: 3, label: "Babu Bazar" },
                { y: 4, label: "Badda" },
                { y: 3, label: "Baily Road" },
                { y: 7, label: "Banani" },
                { y: 7, label: "Bangshal" },
                { y: 12, label: "Basabo" },
                { y: 4, label: "Bashundhara" },
                { y: 1, label: "Begunbari" },
                { y: 1, label: "Beribadh" },
                { y: 1, label: "Bosila" },
                { y: 1, label: "BUET Area" },
                { y: 1, label: "Central Road" },
                { y: 4, label: "Chawk Bazar" },
                { y: 1, label: "Dhakeshwari" },
                { y: 14, label: "Dhanmondi" },
                { y: 1, label: "Dholaikhal" },
                { y: 1, label: "Doyaganj" },
                { y: 1, label: "Eskaton" },
                { y: 1, label: "Farmgate" },
                { y: 3, label: "Gendaria" },
                { y: 5, label: "Green Road" },
                { y: 2, label: "Gulistan" },
                { y: 4, label: "Gulshan" },
                { y: 1, label: "Hatirjheel" },
                { y: 2, label: "Hatirpool" },
                { y: 8, label: "Hazaribagh" },
                { y: 2, label: "Islampur" },
                { y: 2, label: "Jailgate" },
                { y: 11, label: "Jatrabari" },
                { y: 3, label: "Jigatola" },
                { y: 1, label: "Kamrangirchar" },
                { y: 1, label: "Kazipara" },
                { y: 1, label: "Kodomtoli" },
                { y: 2, label: "Kotowali" },
                { y: 13, label: "Lalbagh" },
                { y: 2, label: "Laxmibazar" },
                { y: 2, label: "Malibagh" },
                { y: 1, label: "Manikdi" },
                { y: 2, label: "Mirhajaribagh" },
                { y: 5, label: "Mirpur-1" },
                { y: 2, label: "Mirpur-6" },
                { y: 5, label: "Mirpur-10" },
                { y: 10, label: "Mirpur-11" },
                { y: 8, label: "Mirpur-12" },
                { y: 2, label: "Mirpur-13" },
                { y: 1, label: "Mitford" },
                { y: 4, label: "MogBazar" },
                { y: 7, label: "Mohakhali" },
                { y: 12, label: "Mohammadpur" },
                { y: 2, label: "Mugda" },
                { y: 1, label: "Nawabpur" },
                { y: 2, label: "Narinda" },
                { y: 1, label: "Nikunja" },
                { y: 2, label: "Pirerbagh" },
                { y: 2, label: "Purana Paltan" },
                { y: 2, label: "Rajarbagh" },
                { y: 1, label: "Rampura" },
                { y: 1, label: "Rayerbazar" },
                { y: 1, label: "Sayedabad" },
                { y: 2, label: "Shah Ali Bagh" },
                { y: 2, label: "Shahbagh" },
                { y: 5, label: "Shantinagar" },
                { y: 3, label: "Showari Ghat" },
                { y: 1, label: "Siddheshwari" },
                { y: 1, label: "Sonir Akhra" },
                { y: 2, label: "Sutrapur" },
                { y: 3, label: "Tejgaon" },
                { y: 19, label: "Tolarbagh" },
                { y: 1, label: "Urdu Road" },
                { y: 17, label: "Uttara" },
                { y: 16, label: "Wari" }
            ]
        }]
    });

    Chart_pie.render();
    Chart_doughnut.render();
    Chart_spline.render();
    Chart_line.render();
    Chart_bar.render();
    Chart_column.render();
}

function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}