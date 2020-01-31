def minimumSwaps(arr):
    swaps = 0

    for i in range(len(arr)):
        while(arr[i] != i+1):
            temp = arr[i]
            arr[i] = arr[temp - 1]
            arr[temp - 1] = temp
            swaps += 1
    return swaps


print(minimumSwaps([4, 3, 1, 2]))  # should return 3
print(minimumSwaps([2, 3, 4, 1, 5]))  # should return 3
print(minimumSwaps([1, 3, 5, 2, 4, 6, 7]))  # should return 3
