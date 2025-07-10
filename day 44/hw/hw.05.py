def smash(string):
    words = ""
    for i in string:
        words += i + " "
    return words[0:-1]
