# -*- coding: utf-8 -*- 
import cv2
import numpy as np
import pytesseract
from  PIL import Image
import yolov5
from yolov5.detect import run

run()
r=open('yolov5/runs/detect/exp/labels/img.txt',mode='r', encoding='utf-8')
read =(r.read()).split(' ')

tofloat = list(map(float,read))

Number='img.jpg' 
img=cv2.imread(Number,cv2.IMREAD_COLOR)
h,w,_ = img.shape
'''
tofloat[1] => 가로 길이의 중심좌표/가로길이
tofloat[2] => 세로 길이의 중심좌표/세로길이
tofloat[3] => crop 부분 가로 길이/가로길이
tofloat[4] => crop 부분 세로 길이/세로길이
'''
a=int(w*(tofloat[1] -tofloat[3]/2))
b=int(w*(tofloat[1] +tofloat[3]/2))
c=int(h*(tofloat[2] -tofloat[4]/2))
d=int(h*(tofloat[2] +tofloat[4]/2))

copy_img=img.copy()
img2=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
cropped = img2[c:d,a+10:b-10]
cv2.imwrite('cropped.jpg',cropped)

result = pytesseract.image_to_string(Image.open('cropped.jpg'),lang='kor',config='--psm 10')
print(result)