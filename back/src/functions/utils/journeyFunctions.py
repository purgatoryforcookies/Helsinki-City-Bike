import pandas as pd
import numpy as np



def journey_metrics(journey_df, station_id, limit=5):
    
    result = {}
    incoming = journey_df[journey_df['return_station_id'] == int(station_id)]
    outgoing = journey_df[journey_df['departure_station_id'] == int(station_id)]

    result['incoming'] = len(incoming)
    result['outgoing'] = len(outgoing)
    
    
    record_incoming = incoming['departure_station_id']\
        .value_counts()\
            .reset_index()\
                .set_axis(['id', 'count'], axis='columns')[:limit]\
                    .to_dict('records')
                    
    record_outgoing = outgoing['return_station_id']\
        .value_counts()\
            .reset_index()\
                .set_axis(['id', 'count'], axis='columns')[:limit]\
                    .to_dict('records')
    
    result['leaderboard'] = {"incoming": record_incoming, "outgoing": record_outgoing}
    
    return result









