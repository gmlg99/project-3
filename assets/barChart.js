pollutionAverage = {};

let summary = {
    "Brooklyn" : {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    },
    "Queens": {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    },
    "Bronx": {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    },
    "Manhattan": {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    },
    "Staten Island": {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    }
};

//Loops through entire JSON
for(let i =0; i < airQualityData.length; i++){

    let entry = airQualityData[i]; // gets the current JSON from the array

    //Gets data for specific particle within a borough and adds the data_value to the current sum and count
    summary[entry.geo_place_name][entry.name].sum += entry.data_value;
    summary[entry.geo_place_name][entry.name].count++;
     
}

//loops through each borough in summary
for (let borough in summary) {
    // Initialize borough in pollutionAverage if not already present
    if (!pollutionAverage[borough]) {
        pollutionAverage[borough] = {};
    }

    // Loop through each pollutant 
    for (let pollutant in summary[borough]) {
        let data = summary[borough][pollutant]; // Grabs the sum and count for the pollutants
        // Only calculate average if count is > 0 
        pollutionAverage[borough][pollutant] = data.count > 0 ? data.sum / data.count : 0;
    }
}

console.log(pollutionAverage);


let boroughNames = Object.keys(pollutionAverage); //puts keys --- borough names --- inside a list
console.log(boroughNames);

let pollutantData = Object.values(pollutionAverage); //puts values of each boroughs -- pollutant info ---inside a list 
console.log(pollutantData); 

//for each borough in boroughNames array... look at pollutionAverage with boro as the key
let NitrogenOxideData = boroughNames.map(boro => pollutionAverage[boro]["Nitrogen dioxide (NO2)"]);
console.log(NitrogenOxideData); 

let fineParticleData = boroughNames.map(boro2 => pollutionAverage[boro2]["Fine particles (PM 2.5)"]);
console.log(fineParticleData); 



let plot = document.getElementById('barChartPlot').getContext('2d'); 

new Chart(plot, {
    type: 'bar', 
    data: {
        labels: boroughNames, // X-axis labels: Boroughs
        datasets: [{
                label: "Nitrogen Dioxide (NO2)",
                data: NitrogenOxideData, // NO2 data
                backgroundColor: 'green',
                borderColor: 'darkgreen',
                borderWidth: 1
            },
            {
                label: "Fine Particles (PM 2.5)",
                data: fineParticleData, // PM 2.5 data
                backgroundColor: 'orange',
                borderColor: 'darkorange',
                borderWidth: 1
            }
        ]
    },
    options: {
        responsive: true, // Make the chart responsive
        scales: {
            x: {
                title: {
                    display: true,
                    text: 'NYC Boroughs'
                }
            },
            y: {
                title: {
                    display: true,
                    text: 'Average Pollutant Level'
                }
            }
        },
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'Nitrogen Dioxide vs. Fine Particles'
            },
            tooltip: {
                callbacks: {
                    // Format the tooltips to show units
                    label: function(tooltipItem) {
                        let value = tooltipItem.raw;

                        value = value.toFixed(2) // to make sure its 2 decimal points only

                        if (tooltipItem.datasetIndex === 0) {
                            return value + ' ppb'; // For Nitrogen Dioxide (NO2)
                        } else if (tooltipItem.datasetIndex === 1) {
                            return value + ' mcg/m³'; // For Fine Particles (PM 2.5)
                        }
                        return value;
                    }
                }
             }
            
        }
    }
});