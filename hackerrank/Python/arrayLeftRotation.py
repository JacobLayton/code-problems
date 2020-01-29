def rotLeft(a, d):
    rotationsRemaining = d
    shiftedList = a

    while rotationsRemaining > 0:
        shiftedElement = shiftedList.pop(0)
        shiftedList.append(shiftedElement)
        rotationsRemaining -= 1

    return shiftedList


print(rotLeft([1, 2, 3, 4, 5], 4))  # should return [5, 1, 2, 3, 4]
print(rotLeft([33, 47, 70, 37, 8, 53, 13,
               93, 71, 72, 51, 100, 60, 87, 97], 13))
# should return [87 97 33 47 70 37 8 53 13 93 71 72 51 100 60]
