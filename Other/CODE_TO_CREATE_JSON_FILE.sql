SELECT json_agg(air_quality) 
FROM air_quality;

SELECT json_agg(json_build_object(
    'unique_id', unique_id,
    'indicator_id', indicator_id,
    'name', name,
    'measure_info', measure_info,
    'geo_place_name', geo_place_name,
    'time_period', time_period,
    'data_value', data_value
)) 
FROM air_quality;

COPY (SELECT json_agg(air_quality) FROM air_quality)
TO '/tmp/air_quality.json'
WITH (FORMAT text);