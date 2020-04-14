$(function() {
    
    let bd_Info_Array = [];
    bd_Info_Array.push({Date: '08-03-2020', T_Tests: 'x',T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '09-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '10-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '11-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '12-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '13-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '14-03-2020', T_Tests: 'x',T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 5});
    bd_Info_Array.push({Date: '15-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 5});
    bd_Info_Array.push({Date: '16-03-2020', T_Tests: 'x',T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 8});
    bd_Info_Array.push({Date: '17-03-2020', T_Tests: 'x',T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 10});
    bd_Info_Array.push({Date: '18-03-2020', T_Tests: 'x',T_Positive_Cases: 4, T_Deaths: 1, T_Recovary: 'x', Total: 14});
    bd_Info_Array.push({Date: '19-03-2020', T_Tests: 'x',T_Positive_Cases: 4, T_Deaths: 0, T_Recovary: 'x', Total: 18});
    bd_Info_Array.push({Date: '20-03-2020', T_Tests: 'x',T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 20});
    bd_Info_Array.push({Date: '21-03-2020', T_Tests: 'x',T_Positive_Cases: 4, T_Deaths: 1, T_Recovary: 'x', Total: 24});
    bd_Info_Array.push({Date: '22-03-2020', T_Tests: 'x',T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 27});
    bd_Info_Array.push({Date: '23-03-2020', T_Tests: 'x',T_Positive_Cases: 6, T_Deaths: 1, T_Recovary: 'x', Total: 33});
    bd_Info_Array.push({Date: '24-03-2020', T_Tests: 'x',T_Positive_Cases: 6, T_Deaths: 1, T_Recovary: 'x', Total: 39});
    bd_Info_Array.push({Date: '25-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 39});
    bd_Info_Array.push({Date: '26-03-2020', T_Tests: 'x',T_Positive_Cases: 5, T_Deaths: 0, T_Recovary: 'x', Total: 44});
    bd_Info_Array.push({Date: '27-03-2020', T_Tests: 'x',T_Positive_Cases: 4, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '28-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '29-03-2020', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '30-03-2020', T_Tests: 'x',T_Positive_Cases: 1, T_Deaths: 0, T_Recovary: 4, Total: 49});
    bd_Info_Array.push({Date: '31-03-2020', T_Tests: 'x',T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 51});
    bd_Info_Array.push({Date: '01-04-2020', T_Tests: 'x',T_Positive_Cases: 3, T_Deaths: 1, T_Recovary: 'x', Total: 54});
    bd_Info_Array.push({Date: '02-04-2020', T_Tests: 'x',T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 56});
    bd_Info_Array.push({Date: '03-04-2020', T_Tests: 'x',T_Positive_Cases: 5, T_Deaths: 0, T_Recovary: 'x', Total: 61});
    bd_Info_Array.push({Date: '04-04-2020', T_Tests: 'x',T_Positive_Cases: 9, T_Deaths: 1, T_Recovary: 'x', Total: 70});
    bd_Info_Array.push({Date: '05-04-2020', T_Tests: 'x',T_Positive_Cases: 18, T_Deaths: 1, T_Recovary: 'x', Total: 88});
    bd_Info_Array.push({Date: '06-04-2020', T_Tests: 'x',T_Positive_Cases: 35, T_Deaths: 3, T_Recovary: 'x', Total: 123});
    bd_Info_Array.push({Date: '07-04-2020', T_Tests: 'x',T_Positive_Cases: 41, T_Deaths: 5, T_Recovary: 'x', Total: 164});
    bd_Info_Array.push({Date: '08-04-2020', T_Tests: 'x',T_Positive_Cases: 54, T_Deaths: 3, T_Recovary: 'x', Total: 218});
    bd_Info_Array.push({Date: '09-04-2020', T_Tests: 'x',T_Positive_Cases: 112, T_Deaths: 1, T_Recovary: 'x', Total: 330});
    bd_Info_Array.push({Date: '10-04-2020', T_Tests: 1184,T_Positive_Cases: 94, T_Deaths: 6, T_Recovary: 'x', Total: 424});
    bd_Info_Array.push({Date: '11-04-2020', T_Tests: 954,T_Positive_Cases: 58, T_Deaths: 3, T_Recovary: 3, Total: 482});
    bd_Info_Array.push({Date: '12-04-2020', T_Tests: 1340,T_Positive_Cases: 139, T_Deaths: 4, T_Recovary: 3, Total: 621});
    bd_Info_Array.push({Date: '13-04-2020', T_Tests: 1570,T_Positive_Cases: 182, T_Deaths: 5, T_Recovary: 3, Total: 803});
    bd_Info_Array.push({Date: '14-04-2020', T_Tests: 1905,T_Positive_Cases: 209, T_Deaths: 7, T_Recovary: 0, Total: 1012});

    let bd_table = "<table class='highlight'><tr><th>Date</th><th>Today_Tests</th><th>Today_Positive</th>";
        bd_table += "<th>Today_Deaths</th><th>Today_Recovered</th><th>Total positives</th></tr>"
    for (let index = bd_Info_Array.length - 1; index >= 0; index--) {
        bd_table += "<tr><td>"+bd_Info_Array[index]["Date"]+"</td>"+ 
            "<td>"+bd_Info_Array[index]["T_Tests"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Positive_Cases"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Deaths"]+"</td>"+
            "<td>"+bd_Info_Array[index]["T_Recovary"]+"</td>"+
            "<td>"+bd_Info_Array[index]["Total"]+"</td></tr>"
    }
    bd_table += "</table>";
    $("#bd_Track_Info").html(bd_table);

})