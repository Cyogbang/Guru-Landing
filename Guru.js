function highlight() {
    const homes = document.getElementById("navs1");
    const abouts = document.getElementById("navs2");
    const services = document.getElementById("navs3");
    const datas = document.getElementById("navs4");
    const clients = document.getElementById("navs5");


    const home = document.getElementsByClassName("about1");
    const about = document.getElementsByClassName("about2");
    const service = document.getElementsByClassName("about3");
    const data = document.getElementsByClassName("about4");
    const client = document.getElementsByClassName("about5");

    Highlighted = yes;

    if (homes == yes) {
        home.display = "block"; 
        about.display = "none";
        service.display = "none";
        data.display = "none";
        client.display = "none";
    } else if (abouts == yes) {
        about.display = "block";
        service.display = "none";
        data.display = "none";
        client.display = "none";
        home.display = "none";
    } else if (services == yes) {
        service.display = "block";
        about.display = "none";
        data.display = "none";
        client.display = "none";
        home.display = "none";
    } else if (datas == yes) {
        data.display = "block";
        service.display = "none";
        about.display = "none";
        client.display = "none";
        home.display = "none";
    } else if (clients == yes) {
        client.display = "block";
        data.display = "block";
        service.display = "none";
        about.display = "none";
        home.display = "none";
    } else {
        data.display = "none";
        service.display = "none";
        about.display = "none";
        client.display = "none";
        home.display = "none";
    }
}

function searchDisplay() {
    const search = document.getElementById ("searchForm");

    
}