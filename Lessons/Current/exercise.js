/**
 * Created by alex on 08.11.15.
 */
(function($){
    $(function(){
        $(document).on('click','.submit', function(event) {
            $.ajax({
                url: 'php/validator.php',
                success: function(data, textStatus) {
                    var json = $.parseJSON(data);
                    if (json["result"] == false) {
                        $('*').css("background-color", '');
                        $('#result').css({
                            'background-color': 'pink',
                            'color': 'blue'
                        });
                        $('#result').html(JSON.stringify(json["error"]).substring(1, JSON.stringify(json["error"]).length-1).replace(/,/g,"<br>"));
                        for(var key in json['error']) {
                            $(('#'+key).replace(" ",'')).css("background-color", 'pink');
                        }
                    } else if (json["result"] == true) {
                        $('#result').css({
                            'background-color': 'cyan',
                            'color': 'blue'
                        });
                        $('#result').text("Валидация прошла успешно!!");
                    }
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