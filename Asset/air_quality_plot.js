document.addEventListener("DOMContentLoaded", function() {
    updateTimeSeries(); // Load initial data
});

function updateTimeSeries() {
    const selectedBorough = document.getElementById("borough").value;

    d3.json("air_quality.js").then(data => {
        // Filter data for the selected borough
        const pm25Data = data
            .filter(d => d.geo_place_name === selectedBorough && d.name.includes("PM 2.5"))
            .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

        const no2Data = data
            .filter(d => d.geo_place_name === selectedBorough && d.name.includes("NO2"))
            .sort((a, b) => new Date(a.start_date) - new Date(b.start_date));

        // Prepare traces for PM2.5 and NO2
        const tracePM25 = {
            x: pm25Data.map(d => new Date(d.start_date)),  // X-axis: Date
            y: pm25Data.map(d => d.data_value),           // Y-axis: PM2.5 Values
            mode: 'lines+markers',
            name: 'PM 2.5 (mcg/m³)',
            line: { color: 'blue' }
        };

        const traceNO2 = {
            x: no2Data.map(d => new Date(d.start_date)),  // X-axis: Date
            y: no2Data.map(d => d.data_value),           // Y-axis: NO2 Values
            mode: 'lines+markers',
            name: 'NO2 (ppb)',
            line: { color: 'red' }
        };

        const layout = {
            title: `Air Quality Time Series for ${selectedBorough}`,
            xaxis: { title: "Year", type: "date" },
            yaxis: { title: "Concentration" }
        };

        Plotly.newPlot("timeSeries", [tracePM25, traceNO2], layout);
    });
}
