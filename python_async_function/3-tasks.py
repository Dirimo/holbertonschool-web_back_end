#!/usr/bin/env python3
"""
This function creates an asyncio task for the wait_random coroutine
"""
import asyncio

wait_random = __import__('0-basic_async_syntax').wait_random


def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    This function creates an asyncio task for the wait_random coroutine
    """
    return asyncio.create_task(wait_random(max_delay))
