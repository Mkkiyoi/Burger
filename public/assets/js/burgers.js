$(() => {
    
    $('.create-burger').on('click', (event) => {
        event.preventDefault();
        let newBurger = {
            name: $('#burgerName').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() => {
            console.log('Created burger: ' + id);
            location.reload();
        })
    });

    $('.delete-burger').on('click', (event) => {
        event.preventDefault();
        let id = $(this).data('id');
        $.ajax('/api/burgers/' + id, {
            type: 'DELETE'
        }).then(() => {
            console.log('Deleted burger: ' + id);
            location.reload();
        });
    });
    
    $('.update-devoured').on('click', (event) => {
        event.preventDefault();
        let id = $(this).data('id');
        let newDevoured = $(this).data('newdevoured');
        let newDevouredState = {
            devoured: newDevoured
        }
        $.ajax('/api/burgers/' + id, {
            type: 'PUT',
            data: newDevouredState
        }).then(() => {
            console.log('Updated burger: ' + id);
            location.reload();
        });
    });
    
});