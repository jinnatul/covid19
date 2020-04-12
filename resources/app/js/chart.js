window.onload = function () {
    var chart_pie = new CanvasJS.Chart("chart_pie", {
        theme: "light1", // "light1", "light2", "dark1", "dark2"
        exportEnabled: true,
        animationEnabled: true,
        title: {
            text: "COVID-19 in Bangladesh"
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
    chart_pie.render();
}