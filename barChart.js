allboroughs = [];
pollutionParticles = [];
NitrogenBrooklynpollutionData = {};


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
     

    //Loops through each borough in summary object 
    for(let borough in summary){
        if (!pollutionAverage[borough]) {
            pollutionAverage[borough] = {}; // Initialize borough if it doesn't exist
        }
        //loops through each pollutant within the borough 
        for(let pollutant in summary[borough]){

            let data = summary[borough][pollutant]; //grabs the sum and count data from each object
            let averageValue = data.sum / data.count; //performs avg calc
            pollutionAverage[borough][pollutant] = averageValue; // stores value in pollution averages 

        }
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



/*Brooklyn*/ 
//let BrooklynValues = Object.values(pollutionAverage.Brooklyn);
//console.log(BrooklynValues);

/*Queens*/ 
//let QueensValues = Object.values(pollutionAverage.Queens);

/*Bronx*/
//let BronxValues = Object.values(pollutionAverage.Bronx);

/*Manhattan*/
//let ManhattanValues = Object.values(pollutionAverage.Manhattan);

/*StatenIsland*/
//let StatenIslandValues = Object.values(pollutionAverage.StatenIsland);

let NitrogenOxideDataTrace = {
    x: boroughNames,
    y: NitrogenOxideData,
    text: "NO2",
    name: "Nitrogen dioxide (NO2)",
    type: "bar",
    marker: {
        color: "green"
    }
};


let FineParticlesDataTrace = {
    x: boroughNames,
    y: fineParticleData,
    text: "PM 2.5",
    name: "Fine particles (PM 2.5)",
    type: "bar",
    marker: {
        color: "light yellow"
    }
};

let layout={
    title: "Nitrogen Dioxide vs. Fine Particles",
    barmode: "group",
    xaxis: {
        title: "NYC Boroughs", 
        tickfont: { size: 15, color: "black" },
        titlefont:{ size: 18, color: "black" },
    },
    yaxis: {
        title: "Average Pollutant Level",
        tickfont: { size: 15, color: "black" },
        titlefont:{ size: 18, color: "black" }
    },
    font: { family: "Tahoma, sans-serif" },
    margin: { 
        l:100,
        r:50,
        b:50,
        t: 50, 
        pad: 10
    }

};

let dataTrace = [NitrogenOxideDataTrace, FineParticlesDataTrace];

Plotly.newPlot("BarChartPlot", dataTrace,layout);


