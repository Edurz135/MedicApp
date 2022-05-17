const day_labels = ["5", "8", "10", "15", "18", "21", "23", "28", "30"];

const day_data = {
  labels: day_labels,
  datasets: [
    {
      label: "Dia",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [15, 25, 32, 47, 56, 60, 69, 32, 20],
    },
  ],
};

const day_config = {
  type: "line",
  data: day_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 24,
          },
        },
      },
      title: {
        display: true,
        text: "Historial de Citas",
        font: {
          size: 32,
        },
      },
    },
  },
};

const month_labels = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

const month_data = {
  labels: month_labels,
  datasets: [
    {
      label: "Mes",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      data: [0, 20, 50, 80, 100, 120, 150],
    },
  ],
};

const month_config = {
  type: "line",
  data: month_data,
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 24,
          },
        },
      },
      title: {
        display: true,
        text: "Historial de Citas",
        font: {
          size: 32,
        },
      },
    },
  },
};

var myChart2 = new Chart(document.getElementById("myChart2"), day_config);

const buttons = document.querySelectorAll(".btn-display");

function onButtonClicked() {
  if (buttons) {
    buttons.forEach((btn) => {
        btn.classList.remove("btn-primary")
        btn.classList.add("btn-outline-primary")
    });
    this.classList.remove("btn-outline-primary");
    this.classList.add("btn-primary");


    const displayType = this.getAttribute("display-type");
    myChart2.destroy(); // eliminar el grafico
    if (displayType == "month") {
      myChart2 = new Chart(document.getElementById("myChart2"), month_config); //creo un nuevo grafico con las opeciones mensuales
    } else {
      myChart2 = new Chart(document.getElementById("myChart2"), day_config); //creo un nuevo grafico con las opeciones diarias
    }
  }
}

buttons.forEach((btn) => btn.addEventListener("click", onButtonClicked));
