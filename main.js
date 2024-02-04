$(document).ready(function() {
    $('#newForm').on('submit', function(e) {
        e.preventDefault();

        const newText = $('#text').val();

        const newIten = $('<li></li>').text(newText);

        // receber a funcao de clicar ao css
        newIten.click(function() {
            $(this).toggleClass('clicar');
        });
        
        $('ul').append(newIten);
        $('#text').val('');
    })
})