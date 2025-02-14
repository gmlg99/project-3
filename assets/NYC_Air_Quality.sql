CREATE TABLE air_quality (
    unique_id SERIAL PRIMARY KEY,
    indicator_id INT,
    name VARCHAR(255),
    measure_info VARCHAR(50),
    geo_type_name VARCHAR(50),
    geo_join_id INT NULL,
    geo_place_name VARCHAR(255),
    time_period VARCHAR(50),
    start_date DATE,
    data_value FLOAT
);