# 1)შექმენი ფუნქცია, რომელსაც გადაეცემა 1 არგუმენტი, ეს არგუმენტი არის სია, ამ სიიდან ამოიღეთ მხოლოდ ლუწი რიცხვები და ახალ სიაში ჩაამატეთ, საბოლოოთ ეგ სია დააბრუნეთ
def get_even_numbers(numbers):
    even_list = []
    for num in numbers:
        if num % 2 == 0:
            even_list.append(num)
    return even_list
