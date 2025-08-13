# 3)შექმენი ფუნქცია რომელსაც გადაეცემა 1 ინტეჯერი, დააბრუნეთ ამ ინტეჯერის ფესვი თუ მას ააქვს ფესვი, თუ არ ააქვს დააბრუნეთ იგი აყვანილი კვადრატში
import math

def root_or_square(n):
    root = math.sqrt(n)
    if root.is_integer():
        return int(root)
    else:
        return n ** 2