var delta =0;
    function rotateBy(picture){
        picture.style.webkitTransform="rotate("+delta+"deg)";
        delta+=45;
    }