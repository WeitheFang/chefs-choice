const newFrom = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
    if (title && ingredients && instructions) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ title, ingredients, instructions }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the main page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.new-recipe-form').addEventListener('submit', newFrom); //change the query selector to match the form class name
/* eslint-disable no-unused-vars */
$(document).ready(function () {
    function previewImage(event) {
        /**
         * Get the selected files.
         */
        const imageFiles = event.target.files;
        /**
         * Count the number of files selected.
         */
        const imageFilesLength = imageFiles.length;
        /**
         * If at least one image is selected, then proceed to display the preview.
         */
        if (imageFilesLength > 0) {
            /**
             * Get the image path.
             */
            const imageSrc = URL.createObjectURL(imageFiles[0]);
            /**
             * Select the image preview element.
             */
            const imagePreviewElement = document.querySelector(
                '#preview-selected-image'
            );
            /**
             * Assign the path to the image preview element.
             */
            imagePreviewElement.src = imageSrc;
            /**
             * Show the element by changing the display value to "block".
             */
            imagePreviewElement.style.display = 'block';
        }
    }

    $('#add-ingredient').click((event) => {
        event.preventDefault();
        const id =
            Number(
                $('#ingredients input:last').attr('id').replace('quantity_', '')
            ) + 1;
        console.log(id);
        $('#ingredients').append(`<input
    type="text"
    name="ingredient_${id}"
    id="ingredient_${id}"
    placeholder="Egg"
    class="yellow text-black rounded-xl text-lg p-2 font-thin w-full bg-white"
/> <input
    type="text"
    name="quantity_${id}"
    id="quantity_${id}"
    placeholder="2 pcs"
    class="yellow text-black w-full rounded-xl text-lg p-2 font-thin bg-white"
/>`);
    });
});
const newFrom = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#title').value.trim();
    const ingredients = document.querySelector('#ingredients').value.trim();
    const instructions = document.querySelector('#instructions').value.trim();
    if (title && ingredients && instructions) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({ title, ingredients, instructions }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            // If successful, redirect the browser to the main page
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};
