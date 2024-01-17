# from typing import Union
# from fastapi import FastAPI
# from fastapi import FastAPI, File, UploadFile
# from fastapi.middleware.cors import CORSMiddleware
# from fastapi import FastAPI, File, UploadFile
# from fastapi.responses import JSONResponse
# from fastapi.middleware.cors import CORSMiddleware
# import tensorflow as tf
# from io import BytesIO
# app = FastAPI()

# origins = [
#     "http://127.0.0.1:5500",
#     "http://localhost:5500",
    
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )
# @app.get("/")
# def read_root():
#     return {"Hello": "World"}
# @app.post("/")
# async def create_upload_file(file: UploadFile = File('images\4.jpg')):
#     return {"filename": file.filename}

# @app.get("/items/{item_id}")
# def read_item(item_id: int, q: Union[str, None] = None):
#     return {"item_id": item_id, "q": q}

from flask import Flask, request, jsonify

app = Flask(__name__)

# Replace this path with the actual path to your H5 model file
MODEL_PATH = 'models/ocr_model_50_epoch.h5'

# Load your H5 model
# Example: model = load_model(MODEL_PATH)

@app.route('/ocr', methods=['POST'])
def ocr():
    try:
        # Get the image data from the request
        data = request.get_json()
        image_data = data['image_data']

        # Perform OCR using your H5 model
        # Example: result = model.predict(image_data)

        # Replace this with your actual OCR logic
        # For now, just returning a dummy response
        result = {"text": "Hello, OCR Result!"}

        return jsonify(result)

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
