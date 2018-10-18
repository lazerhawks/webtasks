var countrysAndcitys = {};
countrysAndcitys['Kazakhstan'] = ["Almaty","Astana","Aktaaauuuuuu"];
countrysAndcitys['Kyrgyzstan'] = ["Bishkek","Osh","Paradise-osh"];
countrysAndcitys['England'] = ["London","Manchester","Liverpool"];
countrysAndcitys['France'] = ["Paris","Lyon","Marseille"];

function ChangeCountryList() {
    var countryList = document.getElementById("country");
    var cityList = document.getElementById("countrycity");
    var selCountry = countryList.options[countryList.selectedIndex].value;
    while (cityList.options.length) {
        cityList.remove(0);
    }
    var countrys = countrysAndcitys[selCountry];
    if (countrys) {
        var i;
        for (i = 0; i < countrys.length; i++) {
            var car = new Option(countrys[i], i);
            cityList.options.add(country);
        }
    }
} 