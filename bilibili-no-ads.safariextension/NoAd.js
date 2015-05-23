var re = /^http:\/\/www.bilibili.com\/video\/av/;
if (re.exec(window.location.href) != null) {
    console.log("Remove ADs.");
    var elements = document.getElementsByTagName('*');
    for (var i = 0; i < elements.length; i++) { 
        if (elements[i].className == "ad-f" || elements[i].className == "left ad-fl" || elements[i].className == "right ad-fr" || elements[i].className == "bangumi-content"){ 
            elements[i].parentNode.removeChild(elements[i]);
        }
    }
}
