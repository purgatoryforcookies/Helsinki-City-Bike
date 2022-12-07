import dotenv


dotenv.load_dotenv("../.env")


from internal.ETL import main
from internal import connection
# from models import models
import sqlalchemy

def construct_db():
    try:
        df = main.process_local_files(validate=True)

        main_df, stations_df = main.separate_tables(df)
        
        stations_df.to_sql('stations', connection.soldev_engine, if_exists='fail', index=False)
        main_df.to_sql('ridelog', connection.soldev_engine, if_exists='fail', index=False)
    except Exception as e:
        print("Something went wrong in ETL: ", e)
    

    
