jQuery(document).ready(function ($) {

    'use strict';

    $("[class^='c2d_'],div[class*=' c2d_']").each(function () {

        var dc, c2d_array = [], declaration;
        var classes = $(this).attr('class');
        var c2d_regex = /\bc2d_[a-zA-Z0-9_]+_[a-zA-Z0-9_]+\b/g;
        
        while( dc = c2d_regex.exec(classes) ){
            c2d_array.push(dc[0]);
        }

        for (var i = 0; i < c2d_array.length; i++) {
            dc = c2d_array[i];
            declaration = /\bc2d_(.+)_(.+)\b/.exec(dc);
            declaration['property'] = declaration[1];
            declaration['value'] = declaration[2];
            $(this).css(declaration['property'], declaration['value']);
        };
    });
});
