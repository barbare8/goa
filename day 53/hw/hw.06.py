# 6)შექმენით ფუნქცია, რომელსაც გადაეცემა ორი არგუმენტი, შია და სტრინგი, თუ ეს სტრინგი არის "even" ამოიღეთ სიიდან მხოლოდ ლუქები და დააბრუნეთ, თუ ეს სტრინგი არის "odd" ამოიღეთ ამ სიიდან მხოლოდენ კენტები და დააბრუნეთ
def even_or_odd(numbers mode):
    if mode == "even":
        return [nam for nam in numbers if nam % 2 == 0]
    elif mode == "odd":
        return  [nam for nam in numbers if nam % 2 == 1]
    else:
        return rong "mode"