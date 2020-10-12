var json = JSON.parse("bookmarks.json");

function createLinks() {
    var links = json.links;
    div = document.getElementById("container");
    links.forEach(element => {
        linkName = element["name"];
        linkURL = element["url"];

        a = document.createElement("a");
        ref = document.createAttribute("href");
        ref.value = linkURL;
        a.setAttributeNode(ref);
        a.setAttribute('target', '_blank');
        a.textContent = linkName;

        div.appendChild(a);
    });

}