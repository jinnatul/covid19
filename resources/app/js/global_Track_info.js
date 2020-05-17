$(function() {
    let apiURL = "https://coronavirus-19-api.herokuapp.com/countries";
    $("main").hide();
    $.get(apiURL, function() {})
        .done(function(res) {
            set_Info(res);
            $('.mainLoader').hide();
            $("main").show();
        })
        .fail(function () {
            M.toast({html: 'Internal Problem!!!'})
        })
        .always(function () {
            numberCounter();
        });
})

function set_Info(res) {
   
    let globalDropdown = "<select id = 'data_dropdown'><option value='' disabled selected>Choose your option</option>";

    for (let index = 0; index < res.length - 7; index++) {
        if (index == 6) continue;
        globalDropdown += "<option value='"+index+"'>"+res[index]["country"]+"</option>";

        //set world summary
        if (res[index]["country"] === "World") {
            $('#total_cases_World').text(res[index]["cases"])
            $('#total_deaths_World').text(res[index]["deaths"])
            $('#total_recovary_World').text(res[index]["recovered"])
            $('#total_critical_World').text(res[index]["critical"])

            // Make global chart
            setGlobal_chart(res[index]["cases"], res[index]["deaths"], res[index]["recovered"]);
        }
        //set BD summary
        else if (res[index]["country"] === "Bangladesh") {
            $('#total_cases_BD').text(res[index]["cases"])
            $('#total_deaths_BD').text(res[index]["deaths"])
            $('#total_recovary_BD').text(res[index]["recovered"])
            $('#total_test_BD').text(res[index]["totalTests"])
            $('#today_cases_BD').text(res[index]["todayCases"])
            $('#today_deaths_BD').text(res[index]["todayDeaths"])
            $('#active_BD').text(res[index]["active"])
            $('#casesPerOneMillion_BD').text(res[index]["casesPerOneMillion"])
        }
    }

    globalDropdown += "</select>";
    $('#dropDownId').html(globalDropdown);
    // Default world chart
    makeChart(0, res)

    $(document).ready(function(){
        $('select').formSelect();
    });
    
    //Get Select Option Value
    $("#data_dropdown").change(function() {
        makeChart($('#data_dropdown').val(), res);
    });
}


/* Make column chart */
function makeChart(index, res) {
    var Chart_World = new CanvasJS.Chart("globalInfo", {
        theme: "light1",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: res[index]["country"],
        },
        data: [{
            type: "column",
            toolTipContent: "<b>{name}</b>: {y}",
            indexLabel: "{name}",
            dataPoints: [
                { y: res[index]["cases"], name: "Positive" },
                { y: res[index]["todayCases"], name: "Today cases" },
                { y: res[index]["deaths"], name: "Deaths" },
                { y: res[index]["recovered"], name: "Recovered" },
                { y: res[index]["active"], name: "Active Cases" }
             ]
        }]
    });
    Chart_World.render();
}

function numberCounter() {
    $(".count").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 3000,
            easing: "swing",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });
}


// World Coronavirus_cases vs Deaths vs Recovered
function setGlobal_chart(Coronavirus_cases, Deaths, Recovered) {
    var Chart_Global = new CanvasJS.Chart("chart_Global", {
        theme: "light1",
        exportFileName: "Doughnut Chart",
        exportEnabled: true,
        animationEnabled: true,
        title:{
            text: ""
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
                { y: Coronavirus_cases - Deaths - Recovered, name: "Active cases" },
                { y: Deaths, name: "Deaths" },
                { y: Recovered, name: "Recovered" }
             ]
        }]
    });
    Chart_Global.render();
}
function explodePie (e) {
	if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
	} else {
		e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
	}
	e.chart.render();
}