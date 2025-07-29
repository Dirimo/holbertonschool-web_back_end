#!/usr/bin/env python3
"""
Function that generate a list of tuples containing elements and their lengths
"""
from typing import List, Tuple, Iterable, Sequence


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """
    Function that generate a list of tuples containing
    elements and their lengths
    """
    return [(i, len(i)) for i in lst]
