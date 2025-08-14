#!/usr/bin/env python3
"""
 Function that changes all topics of a school document based on the name
"""

from typing import List


def update_topics(mongo_collection: objet, name:str,  topics: List[str]):

    """Update the topics of a school based on the name."""
    result= mongo_collection.update_many(
            {"name": name}, {"$set": {"topics": topics}})

        return result.modified_count
