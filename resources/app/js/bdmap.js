$(function() {
    let apiURL = "https://corona-bd.herokuapp.com/district"
    $.get(apiURL, function() {})
        .done(function(res) {
            mapMaker(res);
        })
        .fail(function () {
            M.toast({html: 'Internal Problem!!!'})
        })
})


function mapMaker(res) {

    $('#districtCount').text(res["data"].length - 1)
    var tooltip = document.querySelector('#each_District');
    var svgObject = document.getElementById('district_Map').contentDocument;
    var svgSelector = svgObject.querySelector('.country');

    let dataMAP = {}, sum = 0;

    for (let index = 0; index < res["data"].length; index++) {
        let name = res["data"][index]["name"];
        name = name.replace("Dhaka City", "Dhaka")
        name = name.replace("Munshigonj", "Munshiganj")
        name = name.replace("Laksmipur", "Lakshmipur")
        name = name.replace("B. Baria", "Brahmanbaria")
        name = name.replace("Moulovi Bazar", "Moulvibazar")
        name = name.replace("Potuakhali", "Patuakhali")
        name = name.replace("Hobiganj", "Habiganj")
        name = name.replace("Panchagar", "Panchagarh")
        name = name.replace("Cox’s bazar", "CoxsBazar")
        name = name.replace("Narshingdi", "Narsingdi")
        if (name === "Dhaka (District)") {
            dataMAP["Dhaka"][0] += res["data"][index]["count"];
            dataMAP["Dhaka"][1] += res["data"][index]["prev_count"];
        }
        dataMAP[name] = [res["data"][index]["count"], res["data"][index]["prev_count"]]

        sum += parseInt(res["data"][index]["count"]);
        //set color on Each district base on affected count
        let disName = "#" + name;
        if (name === "Dhaka (District)") continue;
        if (res["data"][index]["count"] > 0 && res["data"][index]["count"] <= 50) {
            $(svgObject.querySelector(disName)).css("fill", "#e57373");
        }
        else if (res["data"][index]["count"] > 50 && res["data"][index]["count"] <= 100) {
            $(svgObject.querySelector(disName)).css("fill", "#ef5350");
        }
        else if (res["data"][index]["count"] > 100 && res["data"][index]["count"] <= 150) {
            $(svgObject.querySelector(disName)).css("fill", "#f44336");
        }
        else if (res["data"][index]["count"] > 150) {
            $(svgObject.querySelector(disName)).css("fill", "#d50000");
        }
    }

    $tooltip = $('#each_District');
    $(svgSelector).mouseover(function(event) {
        $tooltip.html(event.target.id);
        if(dataMAP[event.target.id]!==undefined){
            var affectedCount = dataMAP[event.target.id][0];
            let different = affectedCount - dataMAP[event.target.id][1];
            let str = "<h6 class='center-align'>"+event.target.id+"</h6>"+"Total cases: "+affectedCount +"<br> New Cases: "+different;
                str += "<br>Affect (%): "+((affectedCount / sum) * 100).toFixed(2)+"%";
            $tooltip.html(str);
        }
        else {
            $tooltip.html(event.target.id + ": 0");
        }

        tooltip.style.display = 'block';
        $(each_District).css('top', event.pageY + 250);
        $(each_District).css('left', event.pageX - 70);

    });
    $(svgSelector).mouseleave(function(event) {
        tooltip.style.display = 'none';
    });
}