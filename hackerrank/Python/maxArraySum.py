# https://www.hackerrank.com/challenges/max-array-sum/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming

import math
import os
import random
import re
import sys

def maxSubsetSum(arr):
    incl = 0
    excl = 0

    for integer in arr:
        newExcl = max(incl, excl)

        incl = excl + integer
        excl = newExcl

    return max(incl, excl)

print(maxSubsetSum([ 3, 7, 4, 6, 5 ])) # Should return 13
print(maxSubsetSum([ 2, 1, 5, 8, 4 ])) # Should Return 11
print(maxSubsetSum([ 3, 5, -7, 8, 10 ])) # Should return 15