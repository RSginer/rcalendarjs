var _d = new Date(2016, 10, 01);
_date = new Date(_d.getYear(), _d.getMonth(), 01);
console.log(_date)
initCalendar(_date);

function initCalendar(date) {
    var header = document.getElementById("header");
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    header.innerHTML = months[date.getMonth()] + " - " + date.getFullYear();
}

function addMonth() {
    if (this._date.getMonth() >= 11) {
        this._date = new Date((this._date.getYear() + 1), 00, 01);
    } else {
        this._date = new Date(this._date.getYear(), (this._date.getMonth() + 1), 01);
    }
    initCalendar(this._date);
}

function addMonth() {
    if (this._date.getMonth() >= 11) {
        this._date = new Date((this._date.getYear() + 1), 00, 01);
    } else {
        this._date = new Date(this._date.getYear(), (this._date.getMonth() + 1), 01);
    }
    initCalendar(this._date);
}

function subMonth(){
      if (this._date.getMonth() <= 0) {
        this._date = new Date((this._date.getYear() - 1), 11, 01);
    } else {
        this._date = new Date(this._date.getYear(), (this._date.getMonth() - 1), 01);
    }
    initCalendar(this._date);
}