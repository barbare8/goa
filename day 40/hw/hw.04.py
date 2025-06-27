def calculator(x, y,op):
    if op=="+" and type(x)==int  and  type(y)==int:
        return x+y
    elif op=="-" and type(x)==int  and  type(y)==int:
        return x-y
    elif op=="*" and type(x)==int  and  type(y)==int:
        return x*y
    elif op=="/" and type(x)==int  and  type(y)==int:
        return x/y
    else:
        return "unknown value"
