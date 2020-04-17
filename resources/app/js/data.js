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
positiveNumbers.push(23); 
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
    Netrokona_District: centered+"Netrokona<br>Positive: "+positiveNumbers[0]+"<br>Death: ",
    Kishorganj_District: centered+"Kishorganj<br>Positive: "+positiveNumbers[1]+"<br>Death: ",
    Mymansingh_District: centered+"Mymansingh<br>Positive: "+positiveNumbers[2]+"<br>Death: ",
    Sherpur_District: centered+"Sherpur<br>Positive: "+positiveNumbers[3]+"<br>Death: ",
    Jamalpur_District: centered+"Jamalpur<br>Positive: "+positiveNumbers[4]+"<br>Death: ",
    Tangail_District: centered+"Tangail<br>Positive: "+positiveNumbers[5]+"<br>Death: ",
    Gazipur_District: centered+"Gazipur<br>Positive: "+positiveNumbers[6]+"<br>Death: ",
    Dhaka_District: centered+"Dhaka<br>Positive: "+positiveNumbers[7]+"<br>Death: ",
    Narayanganj_District: centered+"Narayanganj<br>Positive: "+positiveNumbers[8]+"<br>Death: ",
    Narshingdi_District: centered+"Narshingdi<br>Positive: "+positiveNumbers[9]+"<br>Death: ",
    Munshiganj_District: centered+"Munshiganj<br>Positive: "+positiveNumbers[10]+"<br>Death: ",
    Shariatpur_District: centered+"Shariatpur<br>Positive: "+positiveNumbers[11]+"<br>Death: ",
    Faridpur_District: centered+"Faridpur<br>Positive: "+positiveNumbers[12]+"<br>Death: ",
    Madaripur_District: centered+"Madaripur<br>Positive: "+positiveNumbers[13]+"<br>Death: ",
    Gopalganj_District: centered+"Gopalganj<br>Positive:"+positiveNumbers[14]+"<br>Death: ",
    Rajbari_District: centered+"Rajbari<br>Positive: "+positiveNumbers[15]+"<br>Death: ",
    Manikganj_District: centered+"Manikganj<br>Positive: "+positiveNumbers[16]+"<br>Death: ",

    //Chittagong Division
    Bandarban_District: centered+"Bandarban<br>Positive: "+positiveNumbers[17]+"<br>Death: ",
    CoxsBazar_District: centered+"Cox's Bazar<br>Positive: "+positiveNumbers[18]+"<br>Death: ",
    Chittagong_District: centered+"Chittagong<br>Positive: "+positiveNumbers[19]+"<br>Death: ",
    Rangamati_District: centered+"Rangamati<br>Positive: "+positiveNumbers[20]+"<br>Death: ",
    Khagrachari_District: centered+"Khagrachari<br>Positive: "+positiveNumbers[21]+"<br>Death: ",
    Feni_District: centered+"Feni<br>Positive: "+positiveNumbers[22]+"<br>Death: ",
    Noakhali_District: centered+"Noakhali<br>Positive: "+positiveNumbers[23]+"<br>Death: ",
    Lakshmipur_District: centered+"Lakshmipur<br>Positive: "+positiveNumbers[24]+"<br>Death: ",
    Chandpur_District: centered+"Chandpur<br>Positive: "+positiveNumbers[25]+"<br>Death: ",
    Comilla_District: centered+"Comilla<br>Positive: "+positiveNumbers[26]+"<br>Death: ",
    Brahmanbaria_District: centered+"Brahmanbaria<br>Positive: "+positiveNumbers[27]+"<br>Death: ",

    //Barisal Division
    Bhola_District: centered+"Bhola<br>Positive: "+positiveNumbers[28]+"<br>Death: ",
    Patuakhali_District: centered+"Patuakhali<br>Positive: "+positiveNumbers[29]+"<br>Death: ",
    Barguna_District: centered+"Barguna<br>Positive: "+positiveNumbers[30]+"<br>Death: ",
    Jhalokhati_District: centered+"Jhalokhati<br>Positive: "+positiveNumbers[31]+"<br>Death: ",
    Pirojpur_District: centered+"Pirojpur<br>Positive: "+positiveNumbers[32]+"<br>Death: ",
    Barisal_District: centered+"Barisal<br>Positive: "+positiveNumbers[33]+"<br>Death: ",

    //Khulna Division
    Bagerhat_District:centered+ "Bagerhat<br>Positive: "+positiveNumbers[34]+"<br>Death: ",
    Khulna_District:centered+ "Khulna<br>Positive: "+positiveNumbers[35]+"<br>Death: ",
    Satkhira_District:centered+ "Satkhira<br>Positive: "+positiveNumbers[36]+"<br>Death: ",
    Jessore_District: centered+"Jessore<br>Positive: "+positiveNumbers[37]+"<br>Death: ",
    Magura_District: centered+"Magura<br>Positive: "+positiveNumbers[38]+"<br>Death: ",
    Narail_District: centered+"Narail<br>Positive: "+positiveNumbers[39]+"<br>Death: ",
    Jhenaidah_District: centered+"Jhenaidah<br>Positive: "+positiveNumbers[40]+"<br>Death: ",
    Chuadanga_District: centered+"Chuadanga<br>Positive: "+positiveNumbers[41]+"<br>Death: ",
    Meherpur_District: centered+"Meherpur<br>Positive: "+positiveNumbers[42]+"<br>Death: ",
    Kushtia_District: centered+"Kushtia<br>Positive: "+positiveNumbers[43]+"<br>Death: ",

    //Rajshahi Division
    Pabna_District: centered+"Pabna<br>Positive: "+positiveNumbers[44]+"<br>Death: ",
    Natore_District:centered+ "Natore<br>Positive: "+positiveNumbers[45]+"<br>Death: ",
    Sirajganj_District: centered+"Sirajganj<br>Positive: "+positiveNumbers[46]+"<br>Death: ",
    Bogra_District: centered+"Bogra<br>Positive: "+positiveNumbers[47]+"<br>Death: ",
    Joypurhat_District: centered+"Joypurhat<br>Positive: "+positiveNumbers[48]+"<br>Death: ",
    Naogaon_District: centered+"Naogaon<br>Positive: "+positiveNumbers[49]+"<br>Death: ",
    Nawabganj_District: centered+"Chapai Nawabganj<br>Positive: "+positiveNumbers[50]+"<br>Death: ",
    Rajshahi_District: centered+"Rajshahi<br>Positive: "+positiveNumbers[51]+"<br>Death: ",

    //Rangpur Division
    Gaibandha_District:centered+ "Gaibandha<br>Positive: "+positiveNumbers[52]+"<br>Death: ",
    Rangpur_District: centered+"Rangpur<br>Positive: "+positiveNumbers[53]+"<br>Death: ",
    Dinajpur_District: centered+"Dinajpur<br>Positive: "+positiveNumbers[54]+"<br>Death: ",
    Kurigram_District:centered+ "Kurigram<br>Positive: "+positiveNumbers[55]+"<br>Death: ",
    Lalmonirhat_District:centered+ "Lalmonirhat<br>Positive: "+positiveNumbers[56]+"<br>Death: ",
    Nilphamari_District:centered+ "Nilphamari<br>Positive: "+positiveNumbers[57]+"<br>Death: ",
    Thakurgaon_District: centered+"Thakurgaon<br>Positive: "+positiveNumbers[58]+"<br>Death: ",
    Panchaghar_District: centered+"Panchaghar<br>Positive: "+positiveNumbers[59]+"<br>Death: ",

    //Sylhet Division
    Moulvibazar_District: centered+ "Moulvibazar<br>Positive: "+positiveNumbers[60]+"<br>Death: ",
    Sylhet_District:centered+ "Sylhet<br>Positive: "+positiveNumbers[61]+"<br>Death: ",
    Sunamganj_District:centered+ "Sunamganj<br>Positive: "+positiveNumbers[62]+"<br>Death: ",
    Habiganj_District: centered+"Habiganj<br>Positive: "+positiveNumbers[63]+"<br>Death: "
}