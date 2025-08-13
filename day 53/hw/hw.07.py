# 7)შექმენით ფუნქცია, რომელსაც გადაეცემა 1 არგუმენტი, ინტეჯერი, შემდეგ მაგ ინტეჯერი რაოდენობის ასოები დააბრუნეთ ანბანის მიხედვით
import string

def get_alpavet_letters(n):
    alpavet = ""
    for i in range(n):
        alpavet += chr(97+1)
    return alpavet
