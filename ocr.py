import easyocr
def ocr(img):
    reader= easyocr.Reader(['en','hi'],gpu=True)
    result=reader.readtext(img, low_text=0.4,detail=0,paragraph=True,contrast_ths=0.5)
    print(result)
