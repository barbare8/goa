# 2)შექმენით ფუნქცია რომელიც იღებს 2 რიცხვს, სიგრძეს და სიგანეს მართკუთხედის, შემდეგ დააბრუნეთ 2 რიცხვი, ამ მართკუთხედის პერიმეტრი და ფართობი
def square(width,heigth):
    perimeter=2*(width+heigth)
    area=width*heigth
    return perimeter,area
x,y=square(100,50)
