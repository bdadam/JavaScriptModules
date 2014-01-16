define(['jquery'], function($) {
    "use strict";

    var logElement = $('<div style="width: 60%; height: 350px; background-color: #f1f1f1; border: 1px solid #aaa; padding: 24px; margin: 32px 20%; overflow: hidden;"></div>').appendTo(document.body);

    return {
        log: function(message) {
            if (console && console.log) {
                console.log.apply(console, arguments);
            }

            logElement.append('<p>' + JSON.stringify(message) + '</p>');
        }
    };
});