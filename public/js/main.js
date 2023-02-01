$(document).ready(function () {
    $('#search-form').on('submit', function (event) {
        event.preventDefault();
        const search = $('#search').val();
        window.location.replace('/search/' + search);
    });
});
