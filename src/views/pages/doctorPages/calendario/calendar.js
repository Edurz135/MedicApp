document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'es',
    displayEventTime: true,
    themeSystem: "bootstrap5",
    initialDate: "2022-05-12",
    selectMirror: true,
    selectable: true,
    dayMaxEvents: true,
    slotMinTime: "07:00:00",
    slotMaxTime: "23:00:00",
    headerToolbar: {
      left: "prev,today,next",
      center: "title",
      right: "dayGridMonth,timeGridWeek",
    },
    eventClick: function(arg) {
      //Abrir otra pestaña integrada
      window.open("../../doctorPages/cita/cita.html","_self");
    },
    events: [ 
      {
        title: "Cita 2",
        start: "2022-05-13T11:00:00",
        end: "2022-05-13T13:00:00",
        color: "rgba(255, 0, 0, 0.5)",
      },
      {
        title: "Cita 3",
        start: "2022-05-14T10:00:00",
        end: "2022-05-14T12:00:00",
        color: "rgba(0, 0, 255, 0.5)",
      },
    ],
  });

  calendar.render();
});
