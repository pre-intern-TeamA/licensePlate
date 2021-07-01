# -*- coding: utf-8 -*- 
import cv2
import numpy as np
import pytesseract
from  PIL import Image
from detection import detect

def detect_number(filename, _id):
    detect.run(source=filename)
    len_filename = len(filename)
    pure_filename = filename[0:len_filename-4]
    print(_id)
    if _id == '1':
        open_route = 'runs/detect/exp/labels/'+pure_filename+'.txt'
    else:
        open_route = 'runs/detect/exp'+_id+'/labels/'+pure_filename+'.txt'
    r=open(open_route, mode='r', encoding='utf-8')
    read =(r.read()).split(' ')

    tofloat = list(map(float,read))

    Number=filename
    img=cv2.imread(Number,cv2.IMREAD_COLOR)
    h,w,_ = img.shape

    a=int(w*(tofloat[1] -tofloat[3]/2))
    b=int(w*(tofloat[1] +tofloat[3]/2))
    c=int(h*(tofloat[2] -tofloat[4]/2))
    d=int(h*(tofloat[2] +tofloat[4]/2))

    copy_img=img.copy()
    img2=cv2.cvtColor(img,cv2.COLOR_BGR2GRAY)
    cropped = img2[c:d,a+10:b-10]
    cv2.imwrite('cropped.jpg',cropped)

    result = pytesseract.image_to_string(Image.open('cropped.jpg'),lang='kor',config='--psm 10')
    return result
