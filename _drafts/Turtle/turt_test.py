from turtle import *

def draw_a_square(length, angle=90):
    for i in range(4):
        forward(length)
        right(angle)


for i in range(4):
    draw_a_square(90)
    forward(90)
    
input("Press any key to exit ...")