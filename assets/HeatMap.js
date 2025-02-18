document.addEventListener("DOMContentLoaded", function () {
    // Creating the map object
    let myMap = L.map("map", {
        center: [40.7, -73.95],
        zoom: 11
    });

    // Adding the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(myMap);

    let heatLayer;
    let heatVisible = true; // Toggle state for the heatmap

    // Add a Toggle Button to Show/Hide Heatmap
    let toggleButton = L.control({ position: "topright" });
    toggleButton.onAdd = function () {
        let div = L.DomUtil.create("div", "leaflet-bar leaflet-control leaflet-control-custom");
        div.innerHTML = '<button id="toggleHeatmap" style="padding: 5px; background: white; border: 1px solid black; cursor: pointer;">Hide Heatmap</button>';
        div.style.backgroundColor = "white";
        div.style.padding = "5px";
        return div;
    };
    toggleButton.addTo(myMap);

    function updateHeatmap() {
        let selectedPollutant = document.getElementById("pollutant").value;
        let selectedYear = document.getElementById("year").value;
        let heatArray = [];

        for (let i = 0; i < airQualityData.length; i++) {
            let record = airQualityData[i];
            if (record.name === selectedPollutant && record.time_period.includes(selectedYear)) {
                let latLng = {
                    "Brooklyn": [40.6782, -73.9442],
                    "Queens": [40.7282, -73.7949],
                    "Manhattan": [40.7831, -73.9712],
                    "Bronx": [40.8448, -73.8648],
                    "Staten Island": [40.5795, -74.1502]
                }[record.geo_place_name];

                if (latLng) {
                    heatArray.push([latLng[0], latLng[1], record.data_value]);

                    // Adding a popup for each data point
                    L.marker(latLng).addTo(myMap)
                        .bindPopup(`<b>${record.geo_place_name}</b><br>
                                    <b>Pollutant:</b> ${record.name}<br>
                                    <b>Amount:</b> ${record.data_value} ${record.measure_info}<br>
                                    <b>Year:</b> ${record.time_period}`);
                }
            }
        }

        if (heatLayer) {
            myMap.removeLayer(heatLayer);
        }
        heatLayer = L.heatLayer(heatArray, { radius: 20, blur: 35, maxZoom: 15 });

        if (heatVisible) {
            heatLayer.addTo(myMap);
        }
    }

    function populateYears() {
        let years = [...new Set(airQualityData.map(d => d.time_period.split(' ')[2]))];
        let yearSelect = document.getElementById("year");
        yearSelect.innerHTML = ""; // Clear existing options
        years.sort().forEach(year => {
            let option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        });
    }

    document.getElementById("pollutant").addEventListener("change", updateHeatmap);
    document.getElementById("year").addEventListener("change", updateHeatmap);

    // Toggle Heatmap Visibility
    document.getElementById("toggleHeatmap").addEventListener("click", function () {
        if (heatLayer) {
            if (heatVisible) {
                myMap.removeLayer(heatLayer);
                this.textContent = "Show Heatmap";
            } else {
                heatLayer.addTo(myMap);
                this.textContent = "Hide Heatmap";
            }
            heatVisible = !heatVisible;
        }
    });

    populateYears();
    updateHeatmap();

    // Adding an object-based legend with a white box background
    let legend = L.control({ position: "bottomright" });
    legend.onAdd = function () {
        let div = L.DomUtil.create("div", "info legend");
        div.style.backgroundColor = "white";
        div.style.padding = "10px";
        div.style.border = "1px solid black";
        div.style.borderRadius = "5px";
        div.style.boxShadow = "2px 2px 6px rgba(0,0,0,0.3)";

        let levels = {
            "Very Low": "blue",
            "Low": "cyan",
            "Moderate": "lime",
            "High": "yellow",
            "Very High": "red"
        };

        div.innerHTML = "<strong>Pollutant Level</strong><br>";
        for (let key in levels) {
            div.innerHTML += `<i style="background: ${levels[key]}; width: 18px; height: 18px; display: inline-block; margin-right: 5px;"></i> ${key}<br>`;
        }
        return div;
    };
    legend.addTo(myMap);
});