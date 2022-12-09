from functions.utils import converters
import operator


def sort_class(class_list, key):
    
    if key['sortKey'] != 'NONE':
        class_list.sort(key=operator.attrgetter(key['sortKey']), 
                reverse=converters.string_to_bool(key['reverse']))
    
    
    return class_list






