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
    const home = document.getElementById ("about1");

    if (home.style.display = "none") {
        home.style.display = "block";
    } else {
        home.style.display = "none";
    }
}

function searchDisplay() {
    const search = document.getElementById ("searchForm");

    if (search.style.display = "none") {
        console.log("none");
        search.style.display = 'block';
    } else {
        console.log("block");
        search.style.display = 'none';
    } 
}