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
