var today = new Date();
var date = new Date(today.getFullYear(), today.getMonth(), 01);
console.log(date);
initCalendar(date);

function initCalendar(date) {
    var header = document.getElementById("header");
    var body = document.getElementById("body");
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    header.innerHTML = months[date.getMonth()] + " - " + date.getFullYear();
    var monthDays = [31,28,31,30,31,30,31,31,30,31,30,31]
    if (isLeap(date.getFullYear())) {
        monthDays[1]=29;
    }
    var text="";
    for (var i = 1; i <= monthDays[date.getMonth()]; i++) {
       text += '<div class="calendar_body_week_day">'+i+'</div>';
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

function isLeap(year){
return ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
}