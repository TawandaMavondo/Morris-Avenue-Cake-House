// Order link click event
var $order_button = $(".order-link");
$order_button.on("click",function(event){
    // When clicked window location to the order page
    event.preventDefault();
alert("Ordered   ('_') ");
})
// footer Submit button
var $submit = $(".btn-submit");
$submit.on("click",function(event){
event.preventDefault();
});





// conatct form validation pakaipa apa ////////////////////////////////////////////////////////
$(document).ready(function(){ 
    $('#characterLeft').text('140 characters left');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('You have reached the limit');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' characters left');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});





















// Menu Slide Bar////////////////////////////////////
$body = $('body');
$('#menu')
.append('<a href="#menu" class="close"></a>')
.appendTo($body)
.panel({
    target: $body,
    visibleClass: 'is-menu-visible',
    delay: 500,
    hideOnClick: true,
    hideOnSwipe: true,
    resetScroll: true,
    resetForms: true,
    side: 'right'
});
(jQuery);


