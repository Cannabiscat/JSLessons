/**
 * Created by alex on 08.11.15.
 */
(function($){
    $(function(){
        $(document).on('click','.submit', function(event) {
            $.ajax({
                url: 'php/validator.php',
                success: function(data, textStatus) {
                    console.log(data);
                },
                data: {
                    username: $('input[name=username]').val(),
                    password: $('input[name=passwd]').val(),
                    email: $('input[name=email]').val(),
                    gender: $('input[name=gender]').val(),
                    credit_card: $('input[name=credit_card]').val(),
                    bio: $('textarea[name=bio]').val()
                },
                type: 'POST'
            });
            event.preventDefault();
        });
    });
})(jQuery);