#!/usr/bin/env python3
"""
Calculate the start and end indices for a given page and page size.
"""

from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Calculate the start and end indices for a given page and page size.

    Args:
        page (int): The page number (1-based index).
        page_size (int): The number of items per page.
    Returns:
        Tuple[int, int]: A tuple containing the start index
         and end index for the given page.
    """
    start_index = (page - 1) * page_size
    end_index = start_index + page_size
    return (start_index, end_index)
