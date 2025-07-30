#!/usr/bin/env python3
"""
module witch async_comprehension function
"""
from typing import List

async_generator = __import__('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """
    async_comprehension

    This asynchronous function collects values from an asynchronous generator
    using an asynchronous comprehension.
    """
    results = [item async for item in async_generator()]
    return results
