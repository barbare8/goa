def stray(arr):
    new_list = []
    for i in arr:
        new_list.append(arr.count(i))
    return arr[new_list.index(1)]