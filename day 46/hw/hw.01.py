def points(games):
    score=0
    for g in games:
        x = int(g[0])
        y = int(g[2])
        if x > y:
            score +=3
        elif x == y:
            score +=1
    return score
def other_angle(a, b):
    return 180 - a - b
