import * as chartJs from "https://cdn.jsdelivr.net/npm/chart.js@3.0.2/dist/chart.esm.js";

const formatDateLabel = (date) => {
    const parts = date.split("-");

    const trim = (part) => {
        return part.charAt(0) === "0" ? part.charAt(1) : part;
    };
    return `${trim(parts[2])}/${trim(parts[1])}`;
};

const createChart = (element, readings) => {
    chartJs.Chart.defaults.font.family = "Nunito";
    chartJs.Chart.defaults.font.size = "10px";

    chartJs.Chart.register.apply(
        null,
        Object.values(chartJs).filter((chartClass) => chartClass.id)
    );

    const labels = readings.map((reading) => formatDateLabel(reading[1]));
    const values = readings.map((reading) => reading[2]);

    const data = {
        labels: labels,
        datasets: [
            {
                label: "kWh usage",
                data: values,
                fill: true,
                borderColor: "rgb(75, 192, 192)",
                tension: 0.1,
                borderWidth: 0.2,
                backgroundColor: "#5A8EDA",
                borderRadius: 10,
            },
        ],
    };

    new chartJs.Chart(element, {
        type: "bar",
        data: data,
        options: {
            scales: {
                y: {
                    grid: {
                        display: false,
                    },
                },
                x: {
                    grid: {
                        display: false,
                    },
                },
            },
            plugins: {
                legend: {
                    display: false,
                },
            },
            maintainAspectRatio: false,
        },
    });
};

export default createChart;
