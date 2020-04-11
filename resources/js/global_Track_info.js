$(function() {

    let apiURL = "https://coronavirus-19-api.herokuapp.com/countries";
    
    $.get(apiURL, function() {})
        .done(function(res) {
            set_Info(res);
        })
})

function set_Info(res) {

    let Info_Continent_Table = "<table class='highlight'><tr><th>Country</th><th>Cases</th><th>TodayCases</th>";
        Info_Continent_Table += "<th>Deaths</th><th>TodayDeaths</th><th>Recovered</th><th>Active</th>";
        Info_Continent_Table += "<th>Critical</th><th>TotalTests</th></tr>";
    
    let Info_Top_10_Country_Table = "<table class='highlight'><tr><th>Country</th><th>Cases</th><th>TodayCases</th>";
        Info_Top_10_Country_Table += "<th>Deaths</th><th>TodayDeaths</th><th>Recovered</th><th>Active</th>";
        Info_Top_10_Country_Table += "<th>Critical</th><th>TotalTests</th></tr>";

    let Info_Global_Table = "<table class='highlight'><tr><th>Country</th><th>Cases</th><th>TodayCases</th>";
        Info_Global_Table += "<th>Deaths</th><th>TodayDeaths</th><th>Recovered</th><th>Active</th>";
        Info_Global_Table += "<th>Critical</th><th>TotalTests</th></tr>";
   
    for (let index = 0; index < res.length - 7; index++) {
        if (index < 6) {
            Info_Continent_Table += "<tr><td>"+res[index]["country"]+"</td>"+
            "<td>"+res[index]["cases"]+"</td>"+
            "<td>"+res[index]["todayCases"]+"</td>"+
            "<td>"+res[index]["deaths"]+"</td>"+
            "<td>"+res[index]["todayDeaths"]+"</td>"+
            "<td>"+res[index]["recovered"]+"</td>"+
            "<td>"+res[index]["active"]+"</td>"+
            "<td>"+res[index]["critical"]+"</td>"+
            "<td>"+res[index]["totalTests"]+"</td></tr>"
        }
        else if (index >= 8 && index <= 17) {
            Info_Top_10_Country_Table += "<tr><td>"+res[index]["country"]+"</td>"+
            "<td>"+res[index]["cases"]+"</td>"+
            "<td>"+res[index]["todayCases"]+"</td>"+
            "<td>"+res[index]["deaths"]+"</td>"+
            "<td>"+res[index]["todayDeaths"]+"</td>"+
            "<td>"+res[index]["recovered"]+"</td>"+
            "<td>"+res[index]["active"]+"</td>"+
            "<td>"+res[index]["critical"]+"</td>"+
            "<td>"+res[index]["totalTests"]+"</td></tr>"
        }
        else if (index >= 20) {
            Info_Global_Table += "<tr><td>"+res[index]["country"]+"</td>"+
            "<td>"+res[index]["cases"]+"</td>"+
            "<td>"+res[index]["todayCases"]+"</td>"+
            "<td>"+res[index]["deaths"]+"</td>"+
            "<td>"+res[index]["todayDeaths"]+"</td>"+
            "<td>"+res[index]["recovered"]+"</td>"+
            "<td>"+res[index]["active"]+"</td>"+
            "<td>"+res[index]["critical"]+"</td>"+
            "<td>"+res[index]["totalTests"]+"</td></tr>"
        }
        
        if (res[index]["country"] === "World") {
            $('#total_cases_World').text(res[index]["cases"])
            $('#total_deaths_World').text(res[index]["deaths"])
            $('#total_recovary_World').text(res[index]["recovered"])
        }
        else if (res[index]["country"] === "Bangladesh") {
            $('#total_cases_BD').text(res[index]["cases"])
            $('#total_deaths_BD').text(res[index]["deaths"])
            $('#total_recovary_BD').text(res[index]["recovered"])
        }
    }
    Info_Continent_Table += "</table>";
    Info_Top_10_Country_Table += "</table>";
    Info_Global_Table += "</table>";

    $("#Info_6_continent_ID").html(Info_Continent_Table);
    $("#Info_Top_10_country_ID").html(Info_Top_10_Country_Table);
    $("#Info_Global_Track_ID").html(Info_Global_Table);
}