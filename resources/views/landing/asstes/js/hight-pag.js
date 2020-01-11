$(function () {
    'use strict';
    var windoh = $(window).height(),
        upper = $('.component-search-putton').innerHeight();
        
        $('.section-hader').height(windoh - upper +35);


});