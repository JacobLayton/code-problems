# https://www.hackerrank.com/challenges/day-of-the-programmer/problem


def dayOfProgrammer(year):
    monthsLessFeb = 31 + 31 + 30 + 31 + 30 + 31 + 31
    feb = 28

    if year == 1918:
        feb = 15
    elif year < 1918 and year % 4 == 0:
        feb = 29
    elif year > 1918 and year % 400 == 0:
        feb = 29
    elif year > 1918 and year % 4 == 0 and year % 100 != 0:
        feb = 29

    daysAway = 256 - (monthsLessFeb + feb)
    return f"{daysAway}.09.{year}"


print(dayOfProgrammer(2017))  # Should return "13.09.2017"
print(dayOfProgrammer(2016))  # Should return "12.09.2016"
print(dayOfProgrammer(1800))  # Should return "12.09.1800"
