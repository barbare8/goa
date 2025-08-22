def maskify(cc):
    len_num = len(cc)
    if len_num <4:
        return cc
    res = []
    for i in cc[:-4]:
        res.append("#")
    return"".join(res) +  cc[-4:]
