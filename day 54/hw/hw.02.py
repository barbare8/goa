def reverse_number(n):
    string = ""
    if n < 0 :
        string += "-" + str(n).replace("-", "")[::-1]
    else:
        string +=str(n)[::-1]
    return int(string)
