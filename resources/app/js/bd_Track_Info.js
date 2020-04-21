let bd_Info_Array = [];
$(function() {
    $('#bangladesh').hide();

    bd_Info_Array.push({Date: '2020-03-08', T_Tests: 'x',T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-09', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-10', T_Tests: 'x',T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-11', T_Tests: 16,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-12', T_Tests: 24,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-13', T_Tests: 24,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 3});
    bd_Info_Array.push({Date: '2020-03-14', T_Tests: 30,T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 5});
    bd_Info_Array.push({Date: '2020-03-15', T_Tests: 27,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 5});
    bd_Info_Array.push({Date: '2020-03-16', T_Tests: 25,T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 8});
    bd_Info_Array.push({Date: '2020-03-17', T_Tests: 49,T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 10});
    bd_Info_Array.push({Date: '2020-03-18', T_Tests: 39,T_Positive_Cases: 4, T_Deaths: 1, T_Recovary: 'x', Total: 14});
    bd_Info_Array.push({Date: '2020-03-19', T_Tests: 46,T_Positive_Cases: 4, T_Deaths: 0, T_Recovary: 'x', Total: 18});
    bd_Info_Array.push({Date: '2020-03-20', T_Tests: 36,T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 20});
    bd_Info_Array.push({Date: '2020-03-21', T_Tests: 36,T_Positive_Cases: 4, T_Deaths: 1, T_Recovary: 'x', Total: 24});
    bd_Info_Array.push({Date: '2020-03-22', T_Tests: 65,T_Positive_Cases: 3, T_Deaths: 0, T_Recovary: 'x', Total: 27});
    bd_Info_Array.push({Date: '2020-03-23', T_Tests: 56,T_Positive_Cases: 6, T_Deaths: 1, T_Recovary: 'x', Total: 33});
    bd_Info_Array.push({Date: '2020-03-24', T_Tests: 92,T_Positive_Cases: 6, T_Deaths: 1, T_Recovary: 'x', Total: 39});
    bd_Info_Array.push({Date: '2020-03-25', T_Tests: 82,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 39});
    bd_Info_Array.push({Date: '2020-03-26', T_Tests: 126,T_Positive_Cases: 5, T_Deaths: 0, T_Recovary: 'x', Total: 44});
    bd_Info_Array.push({Date: '2020-03-27', T_Tests: 106,T_Positive_Cases: 4, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '2020-03-28', T_Tests: 50,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '2020-03-29', T_Tests: 109,T_Positive_Cases: 0, T_Deaths: 0, T_Recovary: 'x', Total: 48});
    bd_Info_Array.push({Date: '2020-03-30', T_Tests: 153,T_Positive_Cases: 1, T_Deaths: 0, T_Recovary: 4, Total: 49});
    bd_Info_Array.push({Date: '2020-03-31', T_Tests: 140,T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 51});
    bd_Info_Array.push({Date: '2020-04-01', T_Tests: 157,T_Positive_Cases: 3, T_Deaths: 1, T_Recovary: 'x', Total: 54});
    bd_Info_Array.push({Date: '2020-04-02', T_Tests: 141,T_Positive_Cases: 2, T_Deaths: 0, T_Recovary: 'x', Total: 56});
    bd_Info_Array.push({Date: '2020-04-03', T_Tests: 203,T_Positive_Cases: 5, T_Deaths: 0, T_Recovary: 'x', Total: 61});
    bd_Info_Array.push({Date: '2020-04-04', T_Tests: 434,T_Positive_Cases: 9, T_Deaths: 1, T_Recovary: 'x', Total: 70});
    bd_Info_Array.push({Date: '2020-04-05', T_Tests: 367,T_Positive_Cases: 18, T_Deaths: 1, T_Recovary: 'x', Total: 88});
    bd_Info_Array.push({Date: '2020-04-06', T_Tests: 468,T_Positive_Cases: 35, T_Deaths: 3, T_Recovary: 'x', Total: 123});
    bd_Info_Array.push({Date: '2020-04-07', T_Tests: 792,T_Positive_Cases: 41, T_Deaths: 5, T_Recovary: 'x', Total: 164});
    bd_Info_Array.push({Date: '2020-04-08', T_Tests: 981,T_Positive_Cases: 54, T_Deaths: 3, T_Recovary: 'x', Total: 218});
    bd_Info_Array.push({Date: '2020-04-09', T_Tests: 1097,T_Positive_Cases: 112, T_Deaths: 1, T_Recovary: 'x', Total: 330});
    bd_Info_Array.push({Date: '2020-04-10', T_Tests: 1184,T_Positive_Cases: 94, T_Deaths: 6, T_Recovary: 'x', Total: 424});
    bd_Info_Array.push({Date: '2020-04-11', T_Tests: 954,T_Positive_Cases: 58, T_Deaths: 3, T_Recovary: 3, Total: 482});
    bd_Info_Array.push({Date: '2020-04-12', T_Tests: 1340,T_Positive_Cases: 139, T_Deaths: 4, T_Recovary: 3, Total: 621});
    bd_Info_Array.push({Date: '2020-04-13', T_Tests: 1570,T_Positive_Cases: 182, T_Deaths: 5, T_Recovary: 3, Total: 803});
    bd_Info_Array.push({Date: '2020-04-14', T_Tests: 1905,T_Positive_Cases: 209, T_Deaths: 7, T_Recovary: 0, Total: 1012});
    bd_Info_Array.push({Date: '2020-04-15', T_Tests: 1740,T_Positive_Cases: 219, T_Deaths: 4, T_Recovary: 7, Total: 1231});
    bd_Info_Array.push({Date: '2020-04-16', T_Tests: 2135,T_Positive_Cases: 341, T_Deaths: 10, T_Recovary: 0, Total: 1572});
    bd_Info_Array.push({Date: '2020-04-17', T_Tests: 2190,T_Positive_Cases: 266, T_Deaths: 15, T_Recovary: 9, Total: 1838});
    bd_Info_Array.push({Date: '2020-04-18', T_Tests: 2114,T_Positive_Cases: 306, T_Deaths: 9, T_Recovary: 8, Total: 2144});
    bd_Info_Array.push({Date: '2020-04-19', T_Tests: 2634,T_Positive_Cases: 312, T_Deaths: 7, T_Recovary: 9, Total: 2456});
    bd_Info_Array.push({Date: '2020-04-20', T_Tests: 2663,T_Positive_Cases: 492, T_Deaths: 10, T_Recovary: 10, Total: 2948});
    bd_Info_Array.push({Date: '2020-04-21', T_Tests: 2974,T_Positive_Cases: 434, T_Deaths: 9, T_Recovary: 2, Total: 3382});

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

    $('#bangladesh').show();
})