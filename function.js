function myFunction(){
    var e1 = document.getElementById("selectType");
    var type = e1.options[e1.selectedIndex].value;

    var e2 = document.getElementById("paper");
    var paper_number = e2.options[e2.selectedIndex].value;

    var startYear = document.getElementById("startYear").value;
    var endYear = document.getElementById("endYear").value;

    var n1 = parseInt(startYear);
    var n2 = parseInt(endYear);
    var downloadNum = n2-n1+1;
    var text;
    var typeKey;
    switch (type) {
        case "1":
            typeKey = "Q";
            break;
        case "2":
            typeKey = "P";
            break;
        case "3":
            typeKey = "A";
            break;
        default:
    }
    var year = startYear;
    for (var i = 0; i < downloadNum; i++) {
        if (typeKey != "A") {
            text = "http://teaching.eng.cam.ac.uk/system/files/P1B" + year + typeKey +"00" + paper_number +".pdf";
        } else {
            text = "http://teaching.eng.cam.ac.uk/system/files/P1B" + year + typeKey +"000.pdf";
        }
        window.open(text);
        year = (parseInt(year) + 1).toString();

    }
    alert("Done, Happy solving Tripos questions!");

    // var text = "http://teaching.eng.cam.ac.uk/system/files/P1B" + year + typeKey +".pdf";
    // window.open(text);
    // console.log(type);
    // console.log(paper_number);
    // console.log(startYear);
    // console.log(endYear);


    // "http://teaching.eng.cam.ac.uk/system/files/P1B2010Q002.pdf"
}
