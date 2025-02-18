##                                                                       Project-3 : Air Quality in New York City

What are the trends in air pollution across NYC boroughs over time?

Our analysis examines air pollution trends in NYC from 2009 to 2022, using data on PM2.5 
(Fine Particulate Matter) and NO2 (Nitrogen Dioxide). These pollutants impact health and urban 
air quality.

# Cleaning data:

The data was retrieved and filtered by borough and pollutant type to include the years of 2009-2022 and the pollutants PM 2.5 and NO2. The csv file was imported to PostgresSQL to be stored. We created a json file that was used to create the line chart, heat map and bar chart.

# Line Chart:


# Heat Map: 

In order to create the Heat Map we used Leaflet.js and D3.js. The map uses the data in the air_quality.js to fetch and prepare the data for the visualization. The heatmap.js is used to processs and apply the data to the heat map. We included a dropdown filter to allow you to filter the data by pollutant type (PM 2.5 and NO2) and year (2009-2022). The dropdown enhances the user experience and allows for clear representation of the data.






# Bar Chart:
