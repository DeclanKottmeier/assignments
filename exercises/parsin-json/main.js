var xhr = new XMLHttpRequest();

xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status === 200){
        var jsonData = xhr.responseText;
        var jsData = JASON.parse(jsonData);
        var h1 = document.createElement("h1");
        h1.innerHTML = jsData.title;
        var body = document.querySelector("body");
        body.appendChild(h1)
    }
}

xhr.open("GET", "https://api.vschool.io/declan/todo", true);
xhr.send();