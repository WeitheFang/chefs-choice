const deleteBtn = async (event) => {
    event.preventDefault();
    const id = event.target.getAttribute('data-id');
    const response = await fetch(`/api/recipes/${id}`, {
        method: 'DELETE',
    });
    if (response.ok) {
        document.location.replace('/profile');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('.recipe-list').addEventListener('click', deleteBtn); //change the query selector to match the class name of the delete button
