#!/usr/bin/env python3
"""
function that returns a function that multiplies its input by a multiplier.
"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """
    function that returns a function that multiplies its input by a multiplier.
    """

    def operation(number: float) -> float:
        return number * multiplier
    return operation
