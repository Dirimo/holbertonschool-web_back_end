#!/usr/bin/env python3
"""
Deletion-resilient hypermedia pagination
"""

import csv
import math  # noqa: F401
from typing import Dict, List, Any


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None
        self.__indexed_dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def indexed_dataset(self) -> Dict[int, List]:
        """Dataset indexed by sorting position, starting at 0
        """
        if self.__indexed_dataset is None:
            dataset = self.dataset()
            truncated_dataset = dataset[:1000]
            self.__indexed_dataset = {
                i: dataset[i] for i in range(len(dataset))
            }
        return self.__indexed_dataset

    def get_hyper_index(self, index: int = None, page_size: int = 10) -> Dict:
        """
        Returns a deletion-resilient page of the dataset.

        Args:
            index (int): Starting index. Defaults to 0.
            page_size (int): Number of items per page. Defaults to 10.

        Returns:
            Dict[str, Any]: page data including index,
            next_index, page_size and data
        """

        # Set default index to 0 if None
        if index is None:
            index = 0

        # Get indexed dataset
        dataset = self.indexed_dataset()
        dataset_size = len(dataset)

        # Assert index is in valid range
        assert isinstance(index, int) and 0 <= index < dataset_size

        data: List[List[Any]] = []
        next_index = index

        # Move forward until valid data is found if index is deleted
        while dataset.get(next_index) is None:
            next_index += 1

        # Add valid items until reaching page_size
        while len(data) < page_size:
            item = dataset.get(next_index)
            if item is not None:
                data.append(item)
            next_index += 1

        return {
            'index': index,
            'next_index': next_index,
            'page_size': page_size,
            'data': data
        }
