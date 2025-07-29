#!/usr/bin/env python3
"""
function that returns a tuple with the string and the square of the number
"""
from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """
    function that returns a tuple with the string and the square of the number
    """
    return (k, v * v)
