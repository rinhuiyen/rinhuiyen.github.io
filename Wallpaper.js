
function wallpaper(){

var imported = document.createElement('script');
imported.src = "https://cdnjs.cloudflare.com/ajax/libs/trianglify/2.0.0/trianglify.min.js";
document.head.appendChild(imported);

var pattern = Trianglify({
    width: window.innerWidth,
    height: window.innerHeight
});
document.body.appendChild(pattern.canvas())
}