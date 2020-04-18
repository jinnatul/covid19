let positiveNumbers = [];
let districtName = [];

//Dhaka Division
districtName.push("Netrokona_District");
positiveNumbers.push(6);
districtName.push("Kishorganj_District");
positiveNumbers.push(33); 
districtName.push("Mymansingh_District");
positiveNumbers.push(9); 
districtName.push("Sherpur_District");
positiveNumbers.push(5); 
districtName.push("Jamalpur_District");
positiveNumbers.push(12); 
districtName.push("Tangail_District");
positiveNumbers.push(9); 
districtName.push("Gazipur_District");
positiveNumbers.push(98); 
districtName.push("Dhaka_District");
positiveNumbers.push(636); 
districtName.push("Narayanganj_District");
positiveNumbers.push(255); 
districtName.push("Narshingdi_District");
positiveNumbers.push(64); 
districtName.push("Munshiganj_District");
positiveNumbers.push(26); 
districtName.push("Shariatpur_District");
positiveNumbers.push(6); 
districtName.push("Faridpur_District");
positiveNumbers.push(2); 
districtName.push("Madaripur_District");
positiveNumbers.push(25); 
districtName.push("Gopalganj_District");
positiveNumbers.push(17); 
districtName.push("Rajbari_District");
positiveNumbers.push(7); 
districtName.push("Manikganj_District");
positiveNumbers.push(5); 

//Chittagong Division
districtName.push("Bandarban_District");
positiveNumbers.push(0); 
districtName.push("CoxsBazar_District");
positiveNumbers.push(1); 
districtName.push("Chittagong_District");
positiveNumbers.push(36); 
districtName.push("Rangamati_District");
positiveNumbers.push(0); 
districtName.push("Khagrachari_District");
positiveNumbers.push(0); 
districtName.push("Feni_District");
positiveNumbers.push(0); 
districtName.push("Noakhali_District");
positiveNumbers.push(2); 
districtName.push("Lakshmipur_District");
positiveNumbers.push(1); 
districtName.push("Chandpur_District");
positiveNumbers.push(7); 
districtName.push("Comilla_District");
positiveNumbers.push(14); 
districtName.push("Brahmanbaria_District");
positiveNumbers.push(8); 

//Barisal Division
districtName.push("Bhola_District");
positiveNumbers.push(0); 
districtName.push("Patuakhali_District");
positiveNumbers.push(1); 
districtName.push("Barguna_District");
positiveNumbers.push(4); 
districtName.push("Jhalokhati_District");
positiveNumbers.push(3); 
districtName.push("Pirojpur_District");
positiveNumbers.push(4); 
districtName.push("Barisal_District");
positiveNumbers.push(12); 

//Khulna Division
districtName.push("Bagerhat_District");
positiveNumbers.push(0); 
districtName.push("Khulna_District");
positiveNumbers.push(1); 
districtName.push("Satkhira_District");
positiveNumbers.push(0); 
districtName.push("Jessore_District");
positiveNumbers.push(0); 
districtName.push("Magura_District");
positiveNumbers.push(0); 
districtName.push("Narail_District");
positiveNumbers.push(1); 
districtName.push("Jhenaidah_District");
positiveNumbers.push(0); 
districtName.push("Chuadanga_District");
positiveNumbers.push(1); 
districtName.push("Meherpur_District");
positiveNumbers.push(0); 
districtName.push("Kushtia_District");
positiveNumbers.push(0); 

//Rajshahi Division
districtName.push("Pabna_District");
positiveNumbers.push(0); 
districtName.push("Natore_District");
positiveNumbers.push(0); 
districtName.push("Sirajganj_District");
positiveNumbers.push(0); 
districtName.push("Bogra_District");
positiveNumbers.push(0); 
districtName.push("Joypurhat_District");
positiveNumbers.push(0); 
districtName.push("Naogaon_District");
positiveNumbers.push(0); 
districtName.push("Nawabganj_District");
positiveNumbers.push(0); 
districtName.push("Rajshahi_District");
positiveNumbers.push(3); 

//Rangpur Division
districtName.push("Gaibandha_District");
positiveNumbers.push(13); 
districtName.push("Rangpur_District");
positiveNumbers.push(3); 
districtName.push("Dinajpur_District");
positiveNumbers.push(8); 
districtName.push("Kurigram_District");
positiveNumbers.push(2); 
districtName.push("Lalmonirhat_District");
positiveNumbers.push(2); 
districtName.push("Nilphamari_District");
positiveNumbers.push(6); 
districtName.push("Thakurgaon_District");
positiveNumbers.push(3); 
districtName.push("Panchaghar_District");
positiveNumbers.push(0); 

//Sylhet Division
districtName.push("Moulvibazar_District");
positiveNumbers.push(2); 
districtName.push("Sylhet_District");
positiveNumbers.push(3); 
districtName.push("Sunamganj_District");
positiveNumbers.push(1); 
districtName.push("Habiganj_District");
positiveNumbers.push(1); 


var centered = "<center>";
var data = {
    //Dhaka Division
    Netrokona_District: centered+"<h6>Netrokona</h6>Positive: "+positiveNumbers[0]+"<br>Death: <br>Total Quarantine: 744",
    Kishorganj_District: centered+"<h6>Kishorganj</h6>Positive: "+positiveNumbers[1]+"<br>Death: <br>Total Quarantine: 1939",
    Mymansingh_District: centered+"<h6>Mymansingh</h6>Positive: "+positiveNumbers[2]+"<br>Death: <br>Total Quarantine: 1479",
    Sherpur_District: centered+"<h6>Sherpur</h6>Positive: "+positiveNumbers[3]+"<br>Death: <br>Total Quarantine: 155",
    Jamalpur_District: centered+"<h6>Jamalpur</h6>Positive: "+positiveNumbers[4]+"<br>Death: <br>Total Quarantine: 811",
    Tangail_District: centered+"<h6>Tangail</h6>Positive: "+positiveNumbers[5]+"<br>Death: <br>Total Quarantine: 3154",
    Gazipur_District: centered+"<h6>Gazipur</h6>Positive: "+positiveNumbers[6]+"<br>Death: <br>Total Quarantine: 2911",
    Dhaka_District: centered+"<h6>Dhaka</h6>Positive: "+positiveNumbers[7]+"<br>Death: <br>Total Quarantine: 1002",
    Narayanganj_District: centered+"<h6>Narayanganj</h6>Positive: "+positiveNumbers[8]+"<br>Death: <br>Total Quarantine: 565",
    Narshingdi_District: centered+"<h6>Narshingdi</h6>Positive: "+positiveNumbers[9]+"<br>Death: <br>Total Quarantine: 1248",
    Munshiganj_District: centered+"<h6>Munshiganj</h6>Positive: "+positiveNumbers[10]+"<br>Death: <br>Total Quarantine: 750",
    Shariatpur_District: centered+"<h6>Shariatpur</h6>Positive: "+positiveNumbers[11]+"<br>Death: <br>Total Quarantine: 428",
    Faridpur_District: centered+"<h6>Faridpur</h6>Positive: "+positiveNumbers[12]+"<br>Death: <br>Total Quarantine: 1735",
    Madaripur_District: centered+"<h6>Madaripur</h6>Positive: "+positiveNumbers[13]+"<br>Death: <br>Total Quarantine: 1262",
    Gopalganj_District: centered+"<h6>Gopalganj</h6>Positive:"+positiveNumbers[14]+"<br>Death: <br>Total Quarantine: 1002",
    Rajbari_District: centered+"<h6>Rajbari</h6>Positive: "+positiveNumbers[15]+"<br>Death: <br>Total Quarantine: 770",
    Manikganj_District: centered+"<h6>Manikganj</h6>Positive: "+positiveNumbers[16]+"<br>Death: <br>Total Quarantine: 1120",

    //Chittagong Division
    Bandarban_District: centered+"<h6>Bandarban</h6>Positive: "+positiveNumbers[17]+"<br>Death: <br>Total Quarantine: 206",
    CoxsBazar_District: centered+"<h6>Cox's Bazar</h6>Positive: "+positiveNumbers[18]+"<br>Death: <br>Total Quarantine: 676",
    Chittagong_District: centered+"<h6>Chittagong</h6>Positive: "+positiveNumbers[19]+"<br>Death: <br>Total Quarantine: 996",
    Rangamati_District: centered+"<h6>Rangamati</h6>Positive: "+positiveNumbers[20]+"<br>Death: <br>Total Quarantine: 240",
    Khagrachari_District: centered+"<h6>Khagrachari</h6>Positive: "+positiveNumbers[21]+"<br>Death: <br>Total Quarantine: 203",
    Feni_District: centered+"<h6>Feni</h6>Positive: "+positiveNumbers[22]+"<br>Death: <br>Total Quarantine: 1160",
    Noakhali_District: centered+"<h6>Noakhali</h6>Positive: "+positiveNumbers[23]+"<br>Death: <br>Total Quarantine: 1563",
    Lakshmipur_District: centered+"<h6>Lakshmipur</h6>Positive: "+positiveNumbers[24]+"<br>Death: <br>Total Quarantine: 3226",
    Chandpur_District: centered+"<h6>Chandpur</h6>Positive: "+positiveNumbers[25]+"<br>Death: <br>Total Quarantine: 1225",
    Comilla_District: centered+"<h6>Comilla</h6>Positive: "+positiveNumbers[26]+"<br>Death: <br>Total Quarantine: 3047",
    Brahmanbaria_District: centered+"<h6>Brahmanbaria</h6>Positive: "+positiveNumbers[27]+"<br>Death: <br>Total Quarantine: 3917",

    //Barisal Division
    Bhola_District: centered+"<h6>Bhola</h6>Positive: "+positiveNumbers[28]+"<br>Death: <br>Total Quarantine: 365",
    Patuakhali_District: centered+"<h6>Patuakhali</h6>Positive: "+positiveNumbers[29]+"<br>Death: <br>Total Quarantine: 868",
    Barguna_District: centered+"<h6>Barguna</h6>Positive: "+positiveNumbers[30]+"<br>Death: <br>Total Quarantine: 482",
    Jhalokhati_District: centered+"<h6>Jhalokhati</h6>Positive: "+positiveNumbers[31]+"<br>Death: <br>Total Quarantine: 326",
    Pirojpur_District: centered+"<h6>Pirojpur</h6>Positive: "+positiveNumbers[32]+"<br>Death: <br>Total Quarantine: 847",
    Barisal_District: centered+"<h6>Barisal</h6>Positive: "+positiveNumbers[33]+"<br>Death: <br>Total Quarantine: 555",

    //Khulna Division
    Bagerhat_District:centered+ "<h6>Bagerhat</h6>Positive: "+positiveNumbers[34]+"<br>Death: <br>Total Quarantine: 2576",
    Khulna_District:centered+ "<h6>Khulna</h6>Positive: "+positiveNumbers[35]+"<br>Death: <br>Total Quarantine: 2032",
    Satkhira_District:centered+ "<h6>Satkhira</h6>Positive: "+positiveNumbers[36]+"<br>Death: <br>Total Quarantine: 3464",
    Jessore_District: centered+"<h6>Jessore</h6>Positive: "+positiveNumbers[37]+"<br>Death: <br>Total Quarantine: 2778",
    Magura_District: centered+"<h6>Magura</h6>Positive: "+positiveNumbers[38]+"<br>Death: <br>Total Quarantine: 742",
    Narail_District: centered+"<h6>Narail</h6>Positive: "+positiveNumbers[39]+"<br>Death: <br>Total Quarantine: 620",
    Jhenaidah_District: centered+"<h6>Jhenaidah</h6>Positive: "+positiveNumbers[40]+"<br>Death: <br>Total Quarantine: 1010",
    Chuadanga_District: centered+"<h6>Chuadanga</h6>Positive: "+positiveNumbers[41]+"<br>Death: <br>Total Quarantine: 565",
    Meherpur_District: centered+"<h6>Meherpur</h6>Positive: "+positiveNumbers[42]+"<br>Death: <br>Total Quarantine: 768",
    Kushtia_District: centered+"<h6>Kushtia</h6>Positive: "+positiveNumbers[43]+"<br>Death: <br>Total Quarantine: 616",

    //Rajshahi Division
    Pabna_District: centered+"<h6>Pabna</h6>Positive: "+positiveNumbers[44]+"<br>Death: <br>Total Quarantine: 1267",
    Natore_District:centered+ "<h6>Natore</h6>Positive: "+positiveNumbers[45]+"<br>Death: <br>Total Quarantine: 441",
    Sirajganj_District: centered+"<h6>Sirajganj</h6>Positive: "+positiveNumbers[46]+"<br>Death: <br>Total Quarantine: 1117",
    Bogra_District: centered+"<h6>Bogra</h6>Positive: "+positiveNumbers[47]+"<br>Death: <br>Total Quarantine: 1123",
    Joypurhat_District: centered+"<h6>Joypurhat</h6>Positive: "+positiveNumbers[48]+"<br>Death: <br>Total Quarantine: 514",
    Naogaon_District: centered+"<h6>Naogaon</h6>Positive: "+positiveNumbers[49]+"<br>Death: <br>Total Quarantine: 2230",
    Nawabganj_District: centered+"<h6>Chapai Nawabganj</h6>Positive: "+positiveNumbers[50]+"<br>Death: <br>Total Quarantine: 1523",
    Rajshahi_District: centered+"<h6>Rajshahi</h6>Positive: "+positiveNumbers[51]+"<br>Death: <br>Total Quarantine: 1242",

    //Rangpur Division
    Gaibandha_District:centered+ "<h6>Gaibandha</h6>Positive: "+positiveNumbers[52]+"<br>Death: <br>Total Quarantine: 1318",
    Rangpur_District: centered+"<h6>Rangpur</h6>Positive: "+positiveNumbers[53]+"<br>Death: <br>Total Quarantine: 466",
    Dinajpur_District: centered+"<h6>Dinajpur</h6>Positive: "+positiveNumbers[54]+"<br>Death: <br>Total Quarantine: 1490",
    Kurigram_District:centered+ "<h6>Kurigram</h6>Positive: "+positiveNumbers[55]+"<br>Death: <br>Total Quarantine: 499",
    Lalmonirhat_District:centered+ "<h6>Lalmonirhat</h6>Positive: "+positiveNumbers[56]+"<br>Death: <br>Total Quarantine: 198",
    Nilphamari_District:centered+ "<h6>Nilphamari</h6>Positive: "+positiveNumbers[57]+"<br>Death: <br>Total Quarantine: 1304",
    Thakurgaon_District: centered+"<h6>Thakurgaon</h6>Positive: "+positiveNumbers[58]+"<br>Death: <br>Total Quarantine: 697",
    Panchaghar_District: centered+"<h6>Panchaghar</h6>Positive: "+positiveNumbers[59]+"<br>Death: <br>Total Quarantine: 1142",

    //Sylhet Division
    Moulvibazar_District: centered+ "<h6>Moulvibazar</h6>Positive: "+positiveNumbers[60]+"<br>Death: <br>Total Quarantine: 1125",
    Sylhet_District:centered+ "<h6>Sylhet</h6>Positive: "+positiveNumbers[61]+"<br>Death: <br>Total Quarantine: 791",
    Sunamganj_District:centered+ "<h6>Sunamganj</h6>Positive: "+positiveNumbers[62]+"<br>Death: <br>Total Quarantine: 1624",
    Habiganj_District: centered+"<h6>Habiganj</h6>Positive: "+positiveNumbers[63]+"<br>Death: <br>Total Quarantine: 1186"
}