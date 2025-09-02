def nth_char(words):
    string = ""
    for i in range(len(words)):
        string += words[i][i]
    return string 
