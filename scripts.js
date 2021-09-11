function readJSON(file) {
    fetch(file)
        .then(response => { return response.json() })
        .then(jsonData => {
            createGroups(jsonData);
        })
}

function createGroups(data) {
    var groups = data.groups;
    div = document.getElementById("container");
    groups.forEach(element => {
        group = document.createElement("div");
        group.classList.add("group");
        groupName = element.groupName + " : {";
        p = document.createElement("p");
        p.textContent = groupName;
        group.appendChild(p);
        createLinks(element.children, group);
        p = document.createElement("p");
        p.textContent = "}";
        group.appendChild(p);
        
        div.appendChild(group);
    });

}

function createLinks(data, group) {
    console.log(data);
    for (i = 0; i < data.length; i++) {
        linkName = "\t" + data[i].name + "\n";
        linkURL = data[i].url;

        a = document.createElement("a");
        ref = document.createAttribute("href");
        ref.value = linkURL;
        a.setAttributeNode(ref);
        a.setAttribute('target', '_blank');
        a.textContent = linkName;

        group.appendChild(a);
    }

}

function addText(text) {
    div = document.getElementById("container");
    p = document.createElement("p");
    p.textContent = text;

    div.appendChild(p);
}


function initBookmarks() {
    readJSON("bookmarks.json");
}