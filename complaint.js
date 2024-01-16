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