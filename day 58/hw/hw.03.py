def capitals(word):
    list = []
    for i in range(len(word)):
        if word[i].isupper():
            list.append(i)
    return list
        
