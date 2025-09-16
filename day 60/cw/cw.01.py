def unusual_five():
    return len("qwert")
"---------------------------"
def add_length(str_):
    res = []
    for i in str_.split(" "):
        res.append(f"{i} {len(i)}")
    return res
    "-------------------------------------"
def invert(lst):
    numbers = []
    for i in lst:
        numbers.append(-i)
    return numbers
    "------------------------------------------"
def divisible_by(numbers, divisor):
    return [i for i in numbers if i% divisor == 0] 
    "-------------------------------------------------------"
def square_sum(numbers):
    total = 0
    for i in numbers:
        total += i**2
    return total