# https://www.hackerrank.com/challenges/candies/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=dynamic-programming


def candies(arr):
    candies = [1 for i in range(len(arr))]

    for i in range(0, len(arr) - 1):
        if(arr[i] < arr[i+1]):
            candies[i+1] = candies[i] + 1

    for j in range(len(arr) - 1, 0, -1):
        if(arr[j] < arr[j - 1]):
            candies[j - 1] = max(candies[j - 1], candies[j] + 1)

    return sum(candies)


print(candies([1, 2, 2]))  # Should return 4
print(candies([2, 4, 2, 6, 1, 7, 8, 9, 2, 1]))  # Should return 19
print(candies([2, 4, 3, 5, 2, 6, 4, 5]))  # Should return 12
