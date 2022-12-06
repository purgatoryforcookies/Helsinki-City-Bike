import pandas as pd
import os
from pandas_profiling import ProfileReport
import matplotlib


PATH = './CSV/'


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











