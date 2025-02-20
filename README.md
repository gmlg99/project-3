# Air Quality in New York City

## Introduction
Air quality is a critical factor in public health and urban planning, especially in high-density areas like New York City. This project analyzes air pollution across different boroughs and compares pollutant levels over time. The objective is to compare pollutant concentrations and identify the most polluted areas.


## Research Questions
1.  What are the trends in air pollution across NYC boroughs over time?
2.  How do different pollutants compare in terms of concentration?
3.  Which areas in NYC experience the highest levels of pollution?

## Data Overview
-   **Time Frame:** 2009 - 2022
-   **Pollutants Analyzed:** PM2.5 (Fine Particulate Matter) and NO2 (Nitrogen Dioxide)
-   **Data Storage:** CSV files imported into PostgreSQL database
-   **Data Processing:** Data was filtered by borough and pollutant type before being converted to JSON for visualization

## Visualizations

### Time Series Chart
**Contributors:** Myatt Minn, Charisse Robinson, Grecia Lopez, Kaouther Abid
-   **Tools Used:** JavaScript, D3.js
-   **Functionality:**
    -   Displays changes in air pollution across NYC boroughs from 2009 to 2022
    -   Dropdown menu in `NYC_AQTimeSeries.html` allows users to select a borough and analyze trends
    -   Uses `air_quality.js` to structure data and `air_quality_plot.js` for filtering and updating the visualization

### Heat Map
**Contributors:** Erika Dorsainvil, William Fetter, Chris Lane, Lorelei Legg
-   **Tools Used:** Leaflet.js, D3.js
-   **Functionality:**
    -   Displays air pollution intensity across NYC using color gradients
    -   Uses `air_quality.js` to fetch and process data
    -   `heatmap.js` applies data to the heat map visualization
    -   Dropdown filters allow users to explore data by pollutant type (PM2.5 and NO2) and year (2009-2022)

### Bar Chart
**Contributors:** Rumani K, Melisa Hodzic, Sea Park, Mikaela Carlton
-   **Tools Used:** D3.js, Chart.js 
-   **Functionality:**
    -   Compares pollutant concentrations across boroughs
    -   Uses JSON data to generate bar charts representing pollution levels 
    -   Uses Chart.js (a new Javascript library) to create a 2D bar chart  

## Data Source
-   Data retrieved from NYC Open Data: [Air Quality Dataset](https://catalog.data.gov/dataset/air-quality)

## Project Structure
```
├── data
│   ├── Air_Quality.csv  # Original dataset
├── scripts
│   ├── air_quality.js    # Processes air pollution data
│   ├── air_quality_plot.js  # Filters data for time series visualization
│   ├── barChart.js       # Creates bar chart visualization
│   ├── heatmap.js        # Processes and applies heatmap data
├── visualizations
│   ├── NYC_AQTimeSeries.html  # Time series chart
│   ├── HeatMap.html           # Heat map visualization
│   ├── BarChart.html          # Bar chart visualization
├── styles
│   ├── index.css              # Stylesheet for index.html - Uses bootstrap & references image in "others" folder (nyc8_image.jpg)
│   ├── leafletStyle.css       # Leaflet-specific styles
|   ├── style.css              # Stylesheet for the majority of HTML's
├── database
│   ├── NYC_Air_Quality.sql    # SQL script for PostgreSQL data storage
├── leaflet-heat.js            # Heat map library
└── README.md                  # Project documentation
```

## Installation & Usage
1.  Clone the repository
2.  Ensure you have PostgreSQL installed and import `NYC_Air_Quality.sql`
3.  Open `NYC_AQTimeSeries.html`, `HeatMap.html`, or `BarChart.html` in a browser to explore visualizations
