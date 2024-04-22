// function highlight() {
//     const home = document.getElementsByClassName("about1");
//     const about = document.getElementsByClassName("about2");
//     const service = document.getElementsByClassName("about3");
//     const data = document.getElementsByClassName("about4");
//     const client = document.getElementsByClassName("about5");

//     if (home.style.display = "none") {
//         home.style.display = "block";
//     } else if (about.style.display = ) {
        
//     }
// }

function highlight1() {
    const home = document.querySelector (".about1");

    if (home.style.display === "none") {
        home.style.display = "block";
    } else {
        home.style.display = "none";
    }
}

function highlight2() {
    const about = document.querySelector (".about2");

    if (about.style.display === "none") {
        about.style.display = "block";
    } else {
        about.style.display = "none";
    }
}

function highlight3() {
    const service = document.querySelector (".about3");

    if (service.style.display === "none") {
        service.style.display = "block";
    } else {
        service.style.display = "none";
    }
}

function highlight4() {
    const data = document.querySelector (".about4");

    if (data.style.display === "none") {
        data.style.display = "block";
    } else {
        data.style.display = "none";
    }
}

function highlight5() {
    const client = document.querySelector (".about5");

    if (client.style.display === "none") {
        client.style.display = "block";
    } else {
        client.style.display = "none";
    }
}

function searchDisplay() {
    const search = document.getElementById ("searchForm");

    if (search.style.display === "none") {
        console.log("none");
        search.style.display = 'block';
    } else {
        console.log("block");
        search.style.display = 'none';
    } 
}

// function searchDisplay () {
//     document.getElementById("searchForm").classList.toggle("hidden");
// }