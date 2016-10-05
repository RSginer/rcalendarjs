var today = new Date();
var date = new Date(today.getFullYear(), today.getMonth(), 01);
initCalendar(date);

function initCalendar(date) {
    var header = document.getElementById("header");
    var body = document.getElementById("body");
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    header.innerHTML = months[date.getMonth()] + " - " + date.getFullYear();
    var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    if (isLeap(date.getFullYear())) {
        monthDays[1] = 29;
    }
    var text = "";
    var numBlankDivs;
    if (date.getDay() != 0) {
        numBlankDivs = date.getDay();
    } else {
        numBlankDivs = 7;
    }
    for (var i = 1; i < numBlankDivs; i++) {
        text += '<div class="calendar_body_week_day"></div>';
    }
    for (var i = 1; i <= monthDays[date.getMonth()]; i++) {
        if (today.getDate()==i && today.getMonth()==date.getMonth()) {
            text += '<div class="calendar_body_week_day calendar_body_week_day--current-day">' + i + '</div>';
        }else{
        text += '<div class="calendar_body_week_day">' + i + '</div>';
        }
    }

    body.innerHTML = text;
}

function addMonth() {
    if (this.date.getMonth() >= 11) {
        this.date = new Date((this.date.getFullYear() + 1), 00, 01);
    } else {
        this.date = new Date(this.date.getFullYear(), (this.date.getMonth() + 1), 01);
    }
    initCalendar(this.date);
}

function subMonth() {
    if (this.date.getMonth() <= 0) {
        this.date = new Date((this.date.getFullYear() - 1), 11, 01);
    } else {
        this.date = new Date(this.date.getFullYear(), (this.date.getMonth() - 1), 01);
    }
    initCalendar(this.date);
}

function isLeap(year) {
    return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
}
