import pandas as pd
import os
# from pandas_profiling import ProfileReport
# import matplotlib


LOG_PATH = 'D:/Projektit/Koodausprojekteja/SolitaDevAcademy/back/src/internal/ETL/CSV_LOG/'
STATION_PATH = 'D:/Projektit/Koodausprojekteja/SolitaDevAcademy/back/src/internal/ETL/station_details.csv'

def process_local_files(validate=True):
    files = os.listdir(LOG_PATH)
    
    
    df_stations = pd.read_csv(STATION_PATH)
    column_names = ['fid','station_id','name', 'name_swe','name_eng','address','address_swe','city','city_swe','operator','capacity','x','y']
    df_stations = df_stations.set_axis(column_names, axis='columns')
    station_ids = df_stations['station_id'].to_list()

    df = pd.DataFrame()

    DATECOLS = ['Departure','Return']

    for f in files:
        df_tmp = pd.read_csv(LOG_PATH+f,parse_dates=DATECOLS)
        df = pd.concat([df, df_tmp])
    

    df = df.drop(columns=['Departure station name','Return station name'])
    
    names = ['departure', 'arrival', 'departure_station_id', 'return_station_id', 'covered_distance_m','duration_s']
    df = df.set_axis(names, axis=1)
        
    if validate:
        df = df[(df['covered_distance_m'] >= 10) & (df['duration_s'] >= 10)]
        df = df[df['departure_station_id'].isin(station_ids) & df['return_station_id'].isin(station_ids)]

    df = df.drop_duplicates(keep='first').reset_index(drop=True)

    
    return df, df_stations



def remove_names_columns(df):
    
                
    df = df.drop(columns=['Departure station name','Return station name'])
    
    names = ['departure', 'arrival', 'departure_station_id', 'return_station_id', 'covered_distance_m','duration_s']
    df = df.set_axis(names, axis=1)

    return df


