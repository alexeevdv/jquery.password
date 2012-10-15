/*
 * password 1.0 - Random password generator for jQuery
 *
 * Copyright (c) 2012 Dmitry V. Alexeev
 *
 * Licensed under the GPL license:
 *   http://www.gnu.org/licenses/gpl.html
 *
 * URL:
 *   http://alexeevdv.ru/projects/jquery/password/
 *
 * Author URL:
 *   http://alexeevdv.ru/
 *
 */
(function($) {
    $.extend({
        password: function(options) {
            this.options = {
                chars: {
                    special: '!@#$%^&*(),./\\\':;][+=-_~`',
                    lowercase: 'abcdefghijklmnopqrstuvwxyz',
                    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
                    digits: '0123456789',
                    readable: "l10OI"
                },
                ignore: '',
                length: 8,
                digits: true,
                special: false,
                readable: true,
                uppercase: true,
                lowercase: true,
                charList: null
            };

            $.extend(this.options,options||{});
            var options = this.options;
            
            var charList = '';
            if (options.digits)    charList += options.chars.digits;
            if (options.special)   charList += options.chars.special;
            if (options.lowercase) charList += options.chars.lowercase;
            if (options.uppercase) charList += options.chars.uppercase;
            
            if (options.readable)  options.ignore += options.chars.readable;
            
            for (var i=0; i<options.ignore.length; i++) charList = charList.replace(options.ignore[i],'');

            if (options.charList!==null) charList = options.charList;

            var password = '';
            
            for (var i=0; i<=options.length; i++) password += charList[Math.floor(Math.random() * charList.length)];
            
            return password;
        }
    });
    
})(jQuery);