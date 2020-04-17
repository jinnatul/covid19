var eachDistrict = document.querySelector('#each_District');

window.addEventListener("load", function() {

    var svgObject = document.getElementById('district_Map').contentDocument;
    var svgSelector = svgObject.querySelector('.country');

    console.log(data["Netrokona_District"]);
    let each = data["Netrokona_District"];

    //if (each.search("7")) console.log("yes");
    //else console.log("no");

    console.log(positiveNumbers.length);

    $(svgObject.querySelector('#Thakurgaon_District')).css("fill", "red");
    $(svgObject.querySelector('#Nilphamari_District')).css("fill", "red");
    $(svgObject.querySelector('#Lalmonirhat_District')).css("fill", "red");
    $(svgObject.querySelector('#Rangpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Dinajpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Kurigram_District')).css("fill", "red");
    $(svgObject.querySelector('#Faridpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Noakhali_District')).css("fill", "red");
    $(svgObject.querySelector('#Pirojpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Narail_District')).css("fill", "red");
    $(svgObject.querySelector('#Khulna_District')).css("fill", "red");
    $(svgObject.querySelector('#Gaibandha_District')).css("fill", "red");
    $(svgObject.querySelector('#Rajshahi_District')).css("fill", "red");
    $(svgObject.querySelector('#Jamalpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Sherpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Chuadanga_District')).css("fill", "red");
    $(svgObject.querySelector('#Rajbari_District')).css("fill", "red");
    $(svgObject.querySelector('#Manikganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Tangail_District')).css("fill", "red");
    $(svgObject.querySelector('#Mymansingh_District')).css("fill", "red");
    $(svgObject.querySelector('#Netrokona_District')).css("fill", "red");
    $(svgObject.querySelector('#Gazipur_District')).css("fill", "red");
    $(svgObject.querySelector('#Kishorganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Sunamganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Sylhet_District')).css("fill", "red");
    $(svgObject.querySelector('#Habiganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Moulvibazar_District')).css("fill", "red");
    $(svgObject.querySelector('#Brahmanbaria_District')).css("fill", "red");
    $(svgObject.querySelector('#Narshingdi_District')).css("fill", "red");
    $(svgObject.querySelector('#Dhaka_District')).css("fill", "red");
    $(svgObject.querySelector('#Narayanganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Munshiganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Comilla_District')).css("fill", "red");
    $(svgObject.querySelector('#Chandpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Shariatpur_District')).css("fill", "red");
    $(svgObject.querySelector('#Lakshmipur_District')).css("fill", "red");
    $(svgObject.querySelector('#Madaripur_District')).css("fill", "red");
    $(svgObject.querySelector('#Gopalganj_District')).css("fill", "red");
    $(svgObject.querySelector('#Barisal_District')).css("fill", "red");
    $(svgObject.querySelector('#Jhalokhati_District')).css("fill", "red");
    $(svgObject.querySelector('#Patuakhali_District')).css("fill", "red");
    $(svgObject.querySelector('#Barguna_District')).css("fill", "red");
    $(svgObject.querySelector('#Chittagong_District')).css("fill", "red");
    $(svgObject.querySelector('#CoxsBazar_District')).css("fill", "red");

    
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
        $(eachDistrict).css('top', event.pageY + 10);
        $(eachDistrict).css('left', event.pageX + 10);

    });
    $(svgSelector).mouseleave(function(event) {
        eachDistrict.style.display = 'none';
    });
});