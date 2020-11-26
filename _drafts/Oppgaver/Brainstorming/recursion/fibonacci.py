def fibonacci(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    result = fibonacci(n-1) + fibonacci(n-2)
    return result

print(fibonacci(15))