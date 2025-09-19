def remove_every_other(my_list):
    list = []
    for i in range(len(my_list)):
        if i % 2 == 0:
            list.append(my_list[i])
    return list
