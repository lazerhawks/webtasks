var cccsAndtowns = {};

cccsAndtowns = {"Kazakhstan":["Almaty","Astana","Karagandy"],"Kyrgystan":["Bishkek","Osh","Batken"],"England":["London","Manchester","Liverpool"],"France":["Paris","Lyon","Marseille"]};


function ChangeCccList() {
    var cccList = document.getElementById("ccc");
    var townList = document.getElementById("ccctown");
    var selCcc = cccList.options[cccList.selectedIndex].value;
    while (townList.options.length) {
        townList.remove(0);
    }
    var cccs = cccsAndtowns[selCcc];
    if (cccs) {
        var i;
        for (i = 0; i < cccs.length; i++) {
            var ccc = new Option(cccs[i], i);
            townList.options.add(ccc);
        }
    }
} 