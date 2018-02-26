# -*- coding: utf-8 -*-

import re

def validate_monero_address(address):
    if address.startswith('4') and len(address) == 95 and address[1].isdigit(): 
        return True
    else:
        return False


