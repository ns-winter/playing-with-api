// Requesting API

var xhr = new XMLHttpRequest();
xhr.open("GET", "YOUR URL HERE", false);
xhr.send();
// return something
// maybe return xmlHttp.responseText;


// Asynchronous version of the above (wrapped in a function)
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}
// 

// Parsing Data provided (JSON)

var demo = '{"pets": { "name": "Jeffrey", "species": "Giraffe"}}';
var json = JSON.parse(demo);
console.log(json);
