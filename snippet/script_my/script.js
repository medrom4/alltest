var img = document.getElementsByTagName('img');
var div = document.createElement('div');

for (var i = 0; i < img.length; i++) {
    if (img[i].width > 300 && img[i].src != '') {
        var newImg = document.createElement('img');
        newImg.style.width = '250px';
        newImg.src = img[i].src;
        var a = document.createElement('a');
        a.setAttribute('href', img[i].src);
        a.setAttribute('target', '_blank');
        a.appendChild(newImg);
        div.appendChild(a);
    }
}

document.body.insertBefore(div, document.body.firstChild);
