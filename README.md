#                                                                      Project-3 : Air Quality in New York City

What are the trends in air pollution across NYC boroughs over time?

Our analysis examines air pollution trends in NYC from 2009 to 2022, using data on PM2.5 
(Fine Particulate Matter) and NO2 (Nitrogen Dioxide). These pollutants impact health and urban 
air quality.

### Cleaning data:

The data was retrieved and filtered by borough and pollutant type to include the years of 2009-2022 and the pollutants PM 2.5 and NO2. The csv file was imported to PostgresSQL to be stored. We created a json file that was used to create the line chart, heat map and bar chart.

### Time Series Chart: Myatt Minn, Charisse Robinson, Grecia Lopez and Kaouther Abid
To create the Time Series Chart, we used Plotly.js to visualize changes in air pollution across NYC boroughs from 2009 to 2022. Data Processing: The data from air_quality.js was structured to include borough, year, and pollutant type (PM2.5 and NO2). air_quality_plot.js filters the data and updates the visualization based on user selection. Finally, a dropdown menu allows users to select a borough on the time series graph and explore throughout the years.


### Heat Map: Erika Dorsainvil, William Fetter, Chris Lane, and Lorelei Legg

In order to create the Heat Map we used Leaflet.js and D3.js. The map uses the data in the air_quality.js to fetch and prepare the data for the visualization. The heatmap.js is used to processs and apply the data to the heat map. We included a dropdown filter to allow you to filter the data by pollutant type (PM 2.5 and NO2) and year (2009-2022). The dropdown enhances the user experience and allows for clear representation of the data.






### Bar Chart: Rumani K, Melisa Hodzic, Sea Park, Mikaela Carlton

