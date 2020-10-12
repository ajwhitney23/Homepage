function readJSON(file) {
    fetch(file)
        .then(response => {return response.json()})
        .then(jsonData => {
            createLinks(jsonData);
        })
}

function createLinks(data) {
    console.log(data);
    var links = data.links;
    div = document.getElementById("container");
    for(i = 0; i < links.length; i++) {
        linkName = "\t" + links[i].name + "\n";
        linkURL = links[i].url;

        a = document.createElement("a");
        ref = document.createAttribute("href");
        ref.value = linkURL;
        a.setAttributeNode(ref);
        a.setAttribute('target', '_blank');
        a.textContent = linkName;

        div.appendChild(a);
    }
    addText(closingText);
    // js way???
    // div = document.getElementById("container");
    // links.forEach(element => {
    //     linkName = element["name"];
    //     linkURL = element["url"];

    //     a = document.createElement("a");
    //     ref = document.createAttribute("href");
    //     ref.value = linkURL;
    //     a.setAttributeNode(ref);
    //     a.setAttribute('target', '_blank');
    //     a.textContent = linkName;

    //     div.appendChild(a);
    // });

}

var openingText = "Bookmarks : {"
var closingText = "}"

function addText(text) {
    div = document.getElementById("container");
    p = document.createElement("p");
    p.textContent = text;

    div.appendChild(p);
}


function initBookmarks() {
    addText(openingText);
    readJSON("bookmarks.json");
}