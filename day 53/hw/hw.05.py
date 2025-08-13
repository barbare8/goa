# 5)შექმენი ფუნქცია, რომელსაც გადაეცემა 3 არგუმენტი,პირველი ორი ინტეჯერი და მესამე მათემატიკური ოპერატორი(+, -, *, /), და დააბრუნეთ ამ ორ რიცხვს ოპერაციის შემდეგ შედეგი ამ ოპერატორის მიხედვით 
def kalkulator(a,b,operator):
    if operator == "+":
        return a+b
    elif operator == "-":
        return a-b
    elif operator =="*":
        return a*b
    elif operator =="/":
        return a/b
        if b != 0:
            return a/b
        else:
            return "არ შეიძლება 0-ზე გაყოფა"
    else:
        return "უცნობი ოპერატორი"