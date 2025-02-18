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
    "StatenIsland": {
        "Fine particles (PM 2.5)" : {sum: 0, count:0},
        "Nitrogen dioxide (NO2)" : {sum: 0, count:0}
    }
};

//Loops through entire JSON
for(let i =0; i < jsonData.length; i++){

    let entry = jsonData[i]; // gets the current JSON from the array

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

/*Brooklyn*/ 
let BrooklynValues = Object.values(pollutionAverage.Brooklyn);
console.log(BrooklynValues);

/*Queens*/ 
let QueensValues = Object.values(pollutionAverage.Queens);

/*Bronx*/
let BronxValues = Object.values(pollutionAverage.Bronx);

/*Manhattan*/
let ManhattanValues = Object.values(pollutionAverage.Manhattan);

/*StatenIsland*/
let StatenIslandValues = Object.values(pollutionAverage.StatenIsland);





