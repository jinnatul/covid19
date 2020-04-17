var eachDistrict = document.querySelector('#each_District');

window.addEventListener("load", function() {

    var svgObject = document.getElementById('district_Map').contentDocument;
    var svgSelector = svgObject.querySelector('.country');

    //set color on Each district base on affected count
    for (let index = 0; index < positiveNumbers.length; index++) {
        let disName = "#" + districtName[index];
        if (positiveNumbers[index] > 0 && positiveNumbers[index] <= 20) {
            $(svgObject.querySelector(disName)).css("fill", "#e57373");
        }
        else if (positiveNumbers[index] > 20 && positiveNumbers[index] <= 50) {
            $(svgObject.querySelector(disName)).css("fill", "#ef5350");
        }
        else if (positiveNumbers[index] > 50 && positiveNumbers[index] <= 100) {
            $(svgObject.querySelector(disName)).css("fill", "#f44336");
        }
        else if (positiveNumbers[index] > 100) {
            $(svgObject.querySelector(disName)).css("fill", "#d50000");
        }
    }

    $eachDistrict = $('#each_District');
    $(svgSelector).mouseover(function(event) {
        var currentLocation = data[event.target.id];
        $eachDistrict.html(event.target.id);
        if(currentLocation!==undefined){
            $eachDistrict.html(currentLocation);
        }
        else {
            $eachDistrict.html("eachDistrict");
        }

        eachDistrict.style.display = 'block';
        $(eachDistrict).css('top', event.pageY + 250);
        $(eachDistrict).css('left', event.pageX - 60);

    });
    $(svgSelector).mouseleave(function(event) {
        eachDistrict.style.display = 'none';
    });
});