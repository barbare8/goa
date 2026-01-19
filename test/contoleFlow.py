# user_is_old = True
# user_is_registr = True
# if user_is_old and user_is_registr:
#     print("you can enter the bank")
# elif user_is_registr and not user_is_old:
#     prin("you not old egnaf")
# else:
#     print("you can enter the bank")


user_has_money = True
user_exsists = False
if user_exsists and user_has_money:
    print("Transaction approved")
elif user_exsists and  not user_has_money:
    print("not enougth balance")
else:
    print("user not found")