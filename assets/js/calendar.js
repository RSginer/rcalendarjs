var showOrHide = false;
var today = new Date();
var date = new Date(today.getFullYear(), today.getMonth(), 01);

/* Localizo el elemento personalizado <rcalendar/> y le añado los contenedores y el boton*/
document.getElementsByTagName("rcalendar")[0].innerHTML =
        '<button class="btn btn--show" onclick="show()"><i class="fa fa-calendar"></i> Calendario</button>' +
        '<span id="info-message" class="info-message"><i class="fa fa-reply"></i> Click para mostrar </span>' +
        '<div id="content-calendar" class="hide"></div>';

initCalendar(date);

function initCalendar(date) {
    
    /* Añado el contenido estatico al calendario*/
    document.getElementById("content-calendar").innerHTML =
            '<div id="calendar" class="calendar ">' +
            '<div class="right"><button class="btn btn--add-month" onclick="addMonth()"></button></div>' +
            '<div class="left"><button class="btn btn--sub-month" onclick="subMonth()"></button></div>' +
            '<div id="header" class="calendar__header"><span class="animated">MES</span></div>' +
            '<div class="calendar__body ">' +
            '<div class="calendar__days">' +
            '<div class="calendar__day">L</div>' +
            '<div class="calendar__day">M</div>' +
            '<div class="calendar__day">X</div>' +
            '<div class="calendar__day">J</div>' +
            '<div class="calendar__day">V</div>' +
            '<div class="calendar__day">S</div>' +
            '<div class="calendar__day">D</div>' +
            '</div>' +
            '<div id="body" class="calendar__week animated">' +
            '</div>' +
            '</div>' +
            '</div>';

    var header = document.getElementById("header");
    var body = document.getElementById("body");
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    var text = "";
    var numBlankDivs;
    var beforeMonth = date.getMonth() - 1;
    var numAddDays = date.getDay() - 1;

    header.innerHTML = '<span class="animated">' + months[date.getMonth()] + " - " + date.getFullYear()+'</span>';
    
    // Si el año es bisiesto febrero tiene 29 dias
    if (isLeap(date.getFullYear())) {
        monthDays[1] = 29;
    }
    
    /* 
     * Compruebo cuando empieza el mes para despues calcular donde colocar los dias del mes anterior (@param numBlankDivs) 
     * y en que numero acabar los dias del mes siguiente (@param numAddDays) 
     * */
    if (date.getDay() != 0) {
        numBlankDivs = date.getDay();
    } else {
        numBlankDivs = 7;
        numAddDays = date.getDay() + 6;
    }
    if (date.getMonth() == 0) {
        beforeMonth = 11;
    }

    /* Añado los dias del mes anterior para completar la semana 
     * Lo que hago es inicializar la i con el ultimo dia del mes anterior - el dia de la semana + 2
     * Entonces quedaría asi, si es sabado: mes anterior = 30; 30-6=24; 24+2= 26 luego contara desde
     * 26 hasta 30: 26,27,28,29,30 entonces pintara lunes,martes,miercoles,jueves y viernes
     * 
     * */
    for (var i = (monthDays[beforeMonth] - numBlankDivs) +2; i <= monthDays[beforeMonth]; i++) {
        text += '<div class="calendar__week__day calendar__week__day--disabled">' + i + '</div>';
    }
    
    /* Añado los dias de este mes*/
    for (var i = 1; i <= monthDays[date.getMonth()]; i++) {
        if (today.getDate() == i && today.getMonth() == date.getMonth() && today.getFullYear() == date.getFullYear()) {
            text += '<div class="calendar__week__day calendar__week__day--current-day">' + i + '</div>';
        } else {
            text += '<div class="calendar__week__day">' + i + '</div>';
        }
    }
    
    /* Añado los dias del siguiente mes para completar el calendario
     * 
     * */
    for (var i = 1; i <= (42 - monthDays[date.getMonth()] - numAddDays); i++) {
        text += '<div class="calendar__week__day calendar__week__day--disabled">' + i + '</div>';
    }

    body.innerHTML = text;
}
/*
 * Suma un mes a la fecha y pinta de nuevo el calendario
 */
function addMonth() {
    if (this.date.getMonth() >= 11) {
        this.date = new Date((this.date.getFullYear() + 1), 00, 01);
    } else {
        this.date = new Date(this.date.getFullYear(), (this.date.getMonth() + 1), 01);
    }
    initCalendar(this.date);
}

/*
 * Resta un mes a la fecha y pinta de nuevo el calendario
 */
function subMonth() {
    if (this.date.getMonth() <= 0) {
        this.date = new Date((this.date.getFullYear() - 1), 11, 01);
    } else {
        this.date = new Date(this.date.getFullYear(), (this.date.getMonth() - 1), 01);
    }
    initCalendar(this.date);
}

/*
 * Comprueba si el año es bisiesto
 */
function isLeap(year) {
    return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
}

/* Muestra u oculta el calendario */
function show() {
    if (this.showOrHide == true) {
        document.getElementById("content-calendar").className="content-calendar__animated--hide";
        this.showOrHide = false;
        document.getElementById("info-message").innerHTML = '<i class="fa fa-reply"></i> Click para mostrar';
    } else {
        document.getElementById("content-calendar").className="content-calendar__animated--show";
        this.showOrHide = true;
        document.getElementById("info-message").innerHTML = '<i class="fa fa-reply"></i> Click para ocultar';
    }
}
