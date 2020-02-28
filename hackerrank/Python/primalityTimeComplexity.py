# https://www.hackerrank.com/challenges/ctci-big-o/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous

import math


def primality(n):
    if n < 2:
        return 'Not prime'
    for i in range(2, int(math.sqrt(n))+1):
        if n % i == 0:
            return 'Not prime'
        else:
            continue
    return 'Prime'


print(primality(12))  # Not prime
print(primality(5))  # Prime
print(primality(7))  # Prime
