/**
 * Created by alex on 24.10.15.
 */
(function($){
    $(function(){
        $('body>div')[0].style.cssText = "width : 100%; display: table; border-spacing: 5px";
        Array.prototype.slice.call($('body > div > div')).forEach(function(elems) {
            elems.style.cssText = "display: table-cell; width: 40%; background-color: grey";
        });
        Array.prototype.slice.call($('div > div > div')).forEach(function(elems) {
            elems.style.cssText = "float: left;width: 100%; height: 25%; display: table; background-color: cyan";
        });
        $("div[id ^='e']").append("<input type='submit'>");
    });
})(jQuery);