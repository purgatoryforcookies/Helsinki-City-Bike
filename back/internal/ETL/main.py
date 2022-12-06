import pandas as pd
import os
# from pandas_profiling import ProfileReport
# import matplotlib


PATH = 'D:/Projektit/Koodausprojekteja/SolitaDevAcademy/back/internal/ETL/CSV/'


def process_local_files(validate=True):
    files = os.listdir(PATH)


    df = pd.DataFrame()

    DATECOLS = ['Departure','Return']

    for f in files:
        df_tmp = pd.read_csv(PATH+f,parse_dates=DATECOLS)
        df = pd.concat([df, df_tmp])
        

    if validate:
        df = df[(df['Covered distance (m)'] >= 10) & (df['Duration (sec.)'] >= 10)]
        df = df.drop_duplicates(keep='first').reset_index(drop=True)


    return df



def separate_tables(df):
    
    
    df2 = df[['Departure station id', 'Departure station name', 'Return station id', 'Return station name']]

    df_2 = df2[['Departure station id','Departure station name']]
    df_22 = df2[['Return station id', 'Return station name']]

    names_ = ['station_id', 'name']

    df_2.set_axis(names_, axis=1, inplace=True)
    df_22.set_axis(names_, axis=1, inplace=True)

    df_station = pd.concat([df_2,df_22])\
        .drop_duplicates(keep='first')\
            .sort_values('station_id')\
                .reset_index(drop=True)
                
    df = df.drop(columns=['Departure station name','Return station name'])
    
    names = ['departure', 'arrival', 'departure_station_id', 'return_station_id', 'covered_distance_m','duration_s']
    df = df.set_axis(names, axis=1)

    return df, df_station




# df = process_local_files()




# df2.to_sql('test', connection.soldev_engine)





