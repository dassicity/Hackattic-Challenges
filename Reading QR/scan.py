import cv2
from pyzbar.pyzbar import decode

# img = cv2.imread('https://hackattic.com/_/qr/f24c40bf.a73d.4921.a305.9b2514c1ad41')
img = cv2.imread('proxy.jpeg')
print(decode(img))