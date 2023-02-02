const profilePageBtn = async (event) => {
    event.preventDefault();
    if (event.target.hasAttribute('data-id')) {
        const id = event.target.getAttribute('data-id');
        const response = await fetch(`/api/recipes/${id}`, {
            method: 'DELETE',
        });
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
    if (event.target.hasAttribute('see-more-id')) {
        const id = event.target.getAttribute('see-more-id');
        const url = 'https://chefs-choise.herokuapp.com/recipe/' + id;
        window.open(url, '_blank').focus();
    }
    if (event.target.hasAttribute('share-id')) {
        const id = event.target.getAttribute('share-id');
        const url = `https://www.facebook.com/sharer/sharer.php?u=chefs-choise.herokuapp.com/recipe/${id}`;
        window.open(url, '_blank').focus();
    }
};

document
    .querySelector('.recipe-list')
    .addEventListener('click', profilePageBtn);
