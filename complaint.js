function uploadImage() {
    var input = document.getElementById('image');
    var preview = document.getElementById('imagePreview');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            var img = new Image();
            img.src = e.target.result;

            img.onload = function () {
                // Display the image preview
                preview.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview">';
            };

            // You can perform additional actions with the image here, such as sending it to your ML model
            // For simplicity, we are only displaying the image preview in this example
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function EngOcr(imageData) {
    console.log('ENG OCR Clicked');

    fetch('http://127.0.0.1:5000/ocr', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ image_data: imageData }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Response:', data);
        // You can update the UI or take additional actions as needed
    })
    .catch(error => {
        console.error('Error:', error);
        // Handle errors here
    });
}


function validateForm() {
    var imageInput = document.getElementById("image");
    if (imageInput.files.length === 0) {
        alert("Please choose an image before submitting.");
        
    }else { EngOcr(imageInput);
    }
}
