function setTitle(title) {
    faces = [
        `:)`
    ];
    
    if (document.hasFocus()) { document.title = title + faces[Math.floor(Math.random() * faces.length)];}
    else { document.title = 'Tower runs Cord ' + faces[Math.floor(Math.random() * faces.length)]; }
    
    setTimeout(function() { setTitle(title) }, 100);
}