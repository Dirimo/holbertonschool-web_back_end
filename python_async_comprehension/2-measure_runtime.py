#!/usr/bin/env python3
"""
Measures runtime of executing four
instances of async_comprehension concurrently.
"""
import asyncio
import time

async_comprehension = __import__('1-async_comprehension').async_comprehension


async def measure_runtime() -> float:
    """
    Measures runtime of executing four
    instances of async_comprehension concurrently.
    """
    start = time.perf_counter()
    await asyncio.gather(*(async_comprehension() for i in range(4)))

    end = time.perf_counter()

    return (end - start)
