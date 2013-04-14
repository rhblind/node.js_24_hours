// Listing 4.2 - demonstrating async behaviour

function sleep(ms) {
    var start = new Date().getTime();
    while ((new Date().getTime() - start) < ms) {

    }
}

function fetchPage() {
    console.log("Fetching page...");
    sleep(2000); // simulate time to fetch web page
    console.log("Fetching page complete!");
}

function fetchApi() {
    console.log("Fetching API...");
    sleep(2000); // simultae time to fetch API
    console.log("Fetching API complete...");
}

fetchPage();
fetchApi();