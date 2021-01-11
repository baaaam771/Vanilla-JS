class Calculator:
    def __init__(self, number, by_what):

        self.number = number
        self.by_what = by_what

    def plus(self):

        plus = self.number + self.by_what
        return plus

    def minus(self):

        minus = self.number - self.by_what
        return minus


number = Calculator(2, 5)
print(number.plus())
print(number.minus())

# ctrl /


def say_hello(name, age):
    return f"Hello {name} you are {age} years old"
    # f= format
    # return "Hello " + name + " you are" + age + " years old"


hello = say_hello("nico", "12")
# hello = say_hello(age="12", name="nico")
# 많은 인자가 생기면 순서를 기억하지 못하게 된다. 그래서 keyword argument를 활용함
print(hello)


def plus(a, b):
    return a+b


plus(12, 10)
