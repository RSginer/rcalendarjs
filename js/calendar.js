date = new Date(new Date().getFullYear(), new Date().getMonth(), 01);
console.log(date);
initCalendar(date);

function initCalendar(date) {
    var header = document.getElementById("header");
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    header.innerHTML = months[date.getMonth()] + " - " + date.getFullYear();
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