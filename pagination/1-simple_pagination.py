#!/usr/bin/env python3
"""
Implement a method named get_page that takes two integer arguments:
page (default 1) and page_size (default 10).
"""
import csv
import math  # noqa: F401
from typing import List
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


class Server:
    """
    Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """
        Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """
            Validate the input types and values.
            Then load the data set and return it
        """
        assert isinstance(page, int) and page > 0
        assert isinstance(page_size, int) and page_size > 0

        range_tuple = index_range(page, page_size)
        start = range_tuple[0]
        end = range_tuple[1]

        # Load the data set
        dataset = self.dataset()

        if start >= len(dataset):
            return []

        return dataset[start:end]
