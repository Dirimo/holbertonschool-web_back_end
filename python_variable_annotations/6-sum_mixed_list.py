#!/usr/bin/env python3
"""
function calculates the sum of a list containing integers and floats
"""
from typing import List, Union


def sum_mixed_list(mxd_list: List[Union[int, float]]) -> float:
    """
    function calculates the sum of a list containing integers and floats
    """
    result: float = 0.0
    for item in mxd_list:
        result = result + item
    return result
