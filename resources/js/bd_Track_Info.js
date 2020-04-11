let bd_Info_Array = [];

$(function() {

    bd_Info_Array.push({Date: '09-04-2020', T_Tests: 'x',T_Positive_Cases: 112, T_Deaths: 1, T_Recovary: 'x'});
    bd_Info_Array.push({Date: '10-04-2020', T_Tests: 1184,T_Positive_Cases: 94, T_Deaths: 6, T_Recovary: 'x'});
    bd_Info_Array.push({Date: '11-04-2020', T_Tests: 954,T_Positive_Cases: 58, T_Deaths: 3, T_Recovary: 3});

    let bd_table = "<table class='highlight'><tr><th>Date</th><th>Today_Tests</th><th>Today_Positive</th>";
        bd_table += "<th>Today_Deaths</th><th>Today_Recovary</th></tr>"
    for (let index = bd_Info_Array.length - 1; index >= 0; index--) {
        bd_table += "<tr><td>"+bd_Info_Array[index]["Date"]+"</td>"+ 
            "<td>"+bd_Info_Array[index]["T_Tests"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Positive_Cases"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Deaths"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Recovary"]+"</td></tr>"
    }
    bd_table += "</table>";
    $("#bd_Track_Info").html(bd_table);

})