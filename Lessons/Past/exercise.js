/**
 * Created by alex on 24.10.15.
 */
(function($){
    $(function(){
        $('body>div').css("position", 'relative')
        $('div > div').css({
            width: '600px',
            height: '600px',            
            position: 'absolute',
            'text-align': 'center'
        });
        tabWidth = $('div>div').width()/4 - 2 + 'px';
        $('ul').css({
            'list-style-type': 'none',
            padding: '0',
            margin: '0',
            display: 'flex',
            width: '600px'
        });        
        $('li').css({
            margin: 'auto',
            width: tabWidth,
            'text-align': 'center'
        }); 
        action($('.1'));             
        $('form').css({
            position: 'relative',
            top: '600px'
        });
        $('li').on("click", function(){
            action(this);
        });
        function action(item) {
            $('div>div').hide();
            $('li').css("background-color", 'lightgrey');
            $(item).css("background-color", 'darkgrey');
            $("#"+$(item).attr('class')).css("background-color", 'darkgrey');
            $("#"+$(item).attr('class')).show();
        }
    });
})(jQuery);
