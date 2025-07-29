#!/usr/bin/env python3
"""
This module contains an asynchronous function that waits
for a random delay multiple times.
"""
import asyncio
from typing import List

task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int = 10) -> List[float]:
    """
    Wait for a random delay multiple times.
    """
    tasks = []
    for item in range(n):
        tasks.append(task_wait_random(max_delay))

    results = []
    for task in asyncio.as_completed(tasks):
        delay = await task
        results.append(delay)

    return results
