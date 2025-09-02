def to_alternating_case(string):
    res = ""
    for i in string:
        if i == i.upper():
            res += i.lower()
        else:
            res += i.upper()
    return res
