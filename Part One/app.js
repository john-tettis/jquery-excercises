$(document).ready(()=>{console.log('Im ready to rumbbbllleee!')})


$('article img').addClass('image-center').on('click',function(){
    console.log($(this));
    $(this).remove();
    })



$('p').last().remove();

$('h1').css('font-size',Math.random()*100)

$('ol').append($(`<li>And I like Icecream!</li>`))

$('ol').html('<p>Sorry this stupid list was even here</p>')

let input = $('.form-control')
input.on('keyup',function(){
    $('body').css('background-color',`rgb(${input[0].value},${input[1].value},${input[2].value})`)

})

