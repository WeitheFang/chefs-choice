/* eslint-disable no-unused-vars */
const newFrom = async (event) => {
    event.preventDefault();
    const recipe_name = document.querySelector('#recipe_name').value.trim();
    const recipe_directions = document
        .querySelector('#recipe_guide')
        .value.trim();
    const preparation_time = document.querySelector('#prep_time').value.trim();
    const difficulty = document.querySelector('#difficulty').value.trim();

    let checklist = document.getElementsByClassName('tags');
    let tag_id = [];
    for (let i = 0; i < checklist.length; i++) {
        if (checklist[i].checked) {
            tag_id.push(parseInt(checklist[i].id.split('_')[1]));
        }
    }

    let allIngredients = document.getElementsByClassName('ingredients');
    let allQuantities = document.getElementsByClassName('quantities');

    let finalIngredients = [];

    for (let i = 0; i < allIngredients.length; i++) {
        let ingredient = allIngredients[i].value;
        let quantity = allQuantities[i].value;
        let finalIngredient = {
            ingredient: ingredient,
            quantity: quantity,
        };
        finalIngredients.push(finalIngredient);
    }

    if (
        recipe_name &&
        recipe_directions &&
        preparation_time &&
        difficulty &&
        tag_id &&
        finalIngredients
    ) {
        const response = await fetch('/api/recipes', {
            method: 'POST',
            body: JSON.stringify({
                recipe_name,
                recipe_directions,
                preparation_time,
                difficulty,
                tag_id,
                finalIngredients,
            }),
            headers: { 'Content-Type': 'application/json' },
        });
        if (response.ok) {
            response.json().then((data) => {
                let formData = new FormData();
                let image = document.querySelector('#file-upload').files[0];
                if (image) {
                    formData.append('picture', image);
                    formData.append('id', data.id);
                    fetch('/api/uploadImage', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => {
                            if (!response.ok) {
                                throw new Error('Error uploading image.');
                            }
                            response.json().then((data) => {
                                // If successful, redirect the browser to the main page
                                document.location.replace('/');
                            });
                        })
                        .catch((error) => {
                            console.error(error);
                        });
                } else {
                    document.location.replace('/');
                }
            });
        } else {
            alert(response.statusText);
        }
    }
};

document.querySelector('.new-recipe-form').addEventListener('submit', newFrom); //change the query selector to match the form class name
$(document).ready(function () {
    $('#add-ingredient').click((event) => {
        event.preventDefault();
        const id =
            Number(
                $('#ingredients input:last').attr('id').replace('quantity_', '')
            ) + 1;
        $('#ingredients').append(`<input
    type="text"
    name="ingredient_${id}"
    id="ingredient_${id}"
    placeholder="Egg"
    class="yellow text-black rounded-xl text-lg p-2 font-thin w-full bg-white ingredients"
/> <input
    type="text"
    name="quantity_${id}"
    id="quantity_${id}"
    placeholder="2 pcs"
    class="yellow text-black w-full rounded-xl text-lg p-2 font-thin bg-white quantities"
/>`);
    });
});
