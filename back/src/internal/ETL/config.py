import dotenv


dotenv.load_dotenv("../.env")


from internal.ETL import main
from internal import connection
# from models import models
import sqlalchemy

def construct_db():
    try:
        df_log, df_station_details = main.process_local_files(validate=True)

        # main_df = main.remove_names_columns(df_log)
        # print(df_station_details)
        
        df_station_details.to_sql('stations', connection.soldev_engine, if_exists='append', index=False)
        df_log.to_sql('ridelog', connection.soldev_engine, if_exists='append', index=False)
    except Exception as e:
        print("Something went wrong in ETL: ", e)
    


