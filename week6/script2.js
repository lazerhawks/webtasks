let countries = ["Kazakhstan","Russia","England","France"];
let cities_by_country = {"Kazakhstan":["Almaty","Astana","Aktaaauuuuuu"],"Kyrgyzstan":["Bishkek","Osh","Paradise-osh"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};

var selectList = document.getElementById("countries");
for (var i = 0; i < countries.length; i++) {
    var option = document.createElement("option");
    option.value = countries[i];
    option.text = countries[i];
    selectList.appendChild(option);
}

function city() {
	var ss = document.getElementById("countries");
	for (var i=0; i<ss.options.length; i++) {
        ss.options[i];

        selectList.appendChild("cities");
    } 
}

var city = document.getElementById("cities");
city.addEventListener("click",city,false);