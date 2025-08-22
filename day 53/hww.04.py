# 4)შექმენი ფუნქცია რომელსაც გადაეცემა ერთი არგუმენტი, ეს არგუმენტი არის სია, ამ სიიდან ამოიღეთ მხოლოდ ისეთი რიცხვები, რომლებიც არიან ლუეები და დგანან კენტნ ინდექზე
def even_numbers_at_odd_indexes():
    result = []
    for i in range(len(lst)):
        if i % 2 == 0:
            if lst[i] % 2 == 0:
                result.append(lst[i])
    return result