var actual = 0;
var total = 173;

$('#last').click(function() {
    ultimo();
});

$('#next').click(function() {
    siguiente();
});

$('#texto').click(function() {
    siguiente();
});

$('#sorpresa').click(function() {
    azar();
});

$('#prev').click(function() {
    anterior();
});

$('#first').click(function() {
    primero();
});

$('#a2006').click(function() {
    year2006();
});

$('#a2007').click(function() {
    year2007();
});

$('#a2008').click(function() {
    year2008();
});

$('#a2009').click(function() {
    year2009();
});


function random() {
    var x = Math.floor((Math.random() * total) + 1);
    return x;
}

function azar() {
    actual = random();
    muestraTexto()
}

function siguiente() {
    if (actual + 1 <= total) {
        actual = actual + 1;
        muestraTexto()
    } else {
        primero();
    }
}

function anterior() {
    if (actual - 1 >= 1) {
        actual = actual - 1;
        muestraTexto()
    } else {
        ultimo();
    }
}

function primero() {
    actual = 1;
    muestraTexto()
}

function ultimo() {
    actual = total;
    muestraTexto()
}

function year2006() {
    actual = 1;
    muestraTexto()
}

function year2007() {
    actual = 22;
    muestraTexto()    
}

function year2008() {
    actual = 48;
    muestraTexto()    
}

function year2009() {
    actual = 140;
    muestraTexto()    
}

function muestraTexto() {
    $("#fecha").html("<a href='" + JSON.stringify(texts[actual-1].youtube).replace(/"/g,"") + "' target='_blank'>" +
                     JSON.stringify(texts[actual-1].id).replace(/"/g,"") + "/" + total + 
                     "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + 
                     JSON.stringify(texts[actual-1].data).replace(/"/g,"") +
                     "</a>");
    $("#texto").html(JSON.stringify(texts[actual-1].text).replace(/<br>/g, "<br>").replace(/<i>/g,"<i>").replace(/<\/i>/g,"</i>").replace(/"/g,""));
}