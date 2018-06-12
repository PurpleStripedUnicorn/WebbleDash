/*

--- WebbleDash ---
Please use with care, this version may contain bugs
WebbleDash is still in the early stages of development

WebbleDash was made by PurpleStripedUnicorn

*/






// -----
// variables
// -----

// define variables so they are global
var theme_color;
var second_theme_color;
var font;









// -----
// functions
// -----

// function for searching for wDash elements
// can be used as quick way instead of typing $( "[data-wdash=***]" )
function d (name, elements /* elements are optional */) {

    // check if elements are given
    // if not, set empty string for elements
    if (typeof elements === "undefined") { elements = ""; }

    // get all of the separate elements in the elements string
    var elements_list = elements.split(",");

    // if there are elements given, loop though them
    if (elements_list.length > 0) {

        // loop through elements to add [data-wdash=name] to it
        var result_elements = "";
        for (i = 0; i < elements_list.length; i++) {
            // add element and name to list
            result_elements += ","+elements_list[i]+"[data-wdash="+name+"]";
        }

        // remove the first comma in the result_elements string, added in the first iteration of the for loop
        result_elements = result_elements.substr(1);

        // return all of the elements with [data-wdash=name] added to them
        return $(""+result_elements+"");

    } else {

        // no elements given, just return
        // return the elements with the property wdash as the name of the input
        return $("[data-wdash="+name+"]");

    }

}






// function to check or uncheck a webbledash switch
function wdash_switch_change_prop (index) {
    // check if the switch is already checked or not
    if ($( "[data-ddash-switch-index="+index+"]" ).is( ":checked" )) {
        // uncheck the switch
        $( "[data-ddash-switch-index="+index+"]" ).prop( "checked", false );
    } else {
        // check the switch
        $( "[data-ddash-switch-index="+index+"]" ).prop( "checked", true );
    }
}






// function to check or uncheck a webbledash checkbox
function wdash_checkbox_change_prop (index) {
    // check if the checkbox is already checked or not
    if ($( "[data-ddash-checkbox-index="+index+"]" ).is( ":checked" )) {
        // uncheck the checkbox
        $( "[data-ddash-checkbox-index="+index+"]" ).prop( "checked", false );
    } else {
        // check the checkbox
        $( "[data-ddash-checkbox-index="+index+"]" ).prop( "checked", true );
    }
}






// function for removing spaces at the start or at the end of a string
function remove_unneeded_spaces (string) {
    // define first and last character of the input string to use later
    var first_char = string.substr(0,1);
    var last_char = string.substr(-1);
    // check if first character is a space
    if (first_char === " ") {
        // set the string to be the same as before without the first character
        string = string.substr(1);
    }
    // check if last character is a space
    if (last_char === " ") {
        // set the string to be the same as before without the last character
        string = string.substr(0, string.length - 1);
    }
    // return result with last and first space removed
    return string;
}






// function for transforming the input[type=number] with textbox elements
function inp_number_transform (element) {

    // add ddash number property
    element.attr( "data-wdash-prop-textbox-type", "number" );

    // change the number input to a text input
    element.attr( "type", "text" );

    // add a function for when the element receives focus
    element.on( "focus", function () {

        // remove all non-numberic characters from the value
        // get the value of the element
        var value = element.val();
        var arr = value.split("");
        var new_value = "";

        // loop through all of the characters
        for (i = 0; i < arr.length; i++) {
            // check if character is numeric
            if ((!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) || arr[i] === ".") {
                // add the character to the string of the result value
                new_value += String(arr[i]);
            }
        }

        // set new value to be the value of the element
        element.val( new_value );

    });

    // add a function for when the element loses focus
    element.on( "blur", function () {

        // check if the value contains any characters
        //   that aren't numbers and remove them
        // get the value of the element
        var value = element.val();
        var arr = value.split("");
        var new_value = "";

        // loop though all the characters and only add numeric ones
        for (i = 0; i < arr.length; i++) {
            // check if character is numeric
            if ((!isNaN(parseFloat(arr[i])) && isFinite(arr[i])) || arr[i] === ".") {
                // add the character to the string of the result value
                new_value += String(arr[i]);
            }
        }


        // add thousand separators to the string
        // split the string into 2 parts: before and after the dot
        var x = new_value.split('.');
        // before the dot
        var x1 = x[0];
        // after the dot
        var x2 = x.length > 1 ? '.' + x[1] : '';
        // split the first part into smaller parts of 2 characters long
        var rgx = /(\d+)(\d{3})/;
        // loop through groups of three
        while (rgx.test(x1)) {
            // add comma as thousand separator
            x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        // set the new_value variable to be with
        //   thousand separators
        new_value = x1 + x2;


        // check if there is a number type set and apply it
        // first, make a list of all number type and character combinations
        // TEMPLATE:   name: [before_string, after_string]
        var types = {
            dollar: ["$", ""],
            euro: ["€", ""],
            meter: ["", "m"]
        };

        // check if the element has a type assigned
        if ($( this ).is("[data-wdash-prop-number-type]")) {
            // get the value of the number type attribute
            var num_type = $( this ).attr( "data-wdash-prop-number-type" );
            // check if the number type is valid
            if (types[num_type] != undefined) {
                // add the text before and after the number
                // it first checks which strings are empty,
                //   if they're not, add a space before/after them
                new_value = types[num_type][0] +
                            (types[num_type][0] === "" ? "" : " ") +
                            new_value +
                            (types[num_type][1] === "" ? "" : " ") +
                            types[num_type][1];
            }
        }


        // set the value of the input to be
        //   the new value that was generated
        element.val(new_value);

    });

}











// -----
// loading script
// -----

// function for when the document is loaded
$( document ).ready(function () {

    // -----
    // preload
    // > check for variables set in the document
    // -----
    theme_color = "#7de37d"; // default theme color
    second_theme_color = "#7de3e3"; // default second theme color
    font = "sans-serif"; // default font to use on all WebbleDash elements
    $( "div[data-wdash-var]" ).each(function () {
        if ($( this ).is( "[data-wdash-value]" )) {

            // main theme color
            if ($( this ).is( "[data-wdash-var=theme-color]" )) {
                theme_color = $( this ).attr( "data-wdash-value" );
                $( this ).remove();
            }

            // second theme color
            if ($( this ).is( "[data-wdash-var=second-theme-color]" )) {
                second_theme_color = $( this ).attr( "data-wdash-value" );
                $( this ).remove();
            }

            // font
            if ($( this ).is( "[data-wdash-var=default-font]" )) {
                font = $( this ).attr( "data-wdash-value" );
                $( this ).remove();
            }

        }
    });










    // -----
    // textboxes
    // -----
    d( "textbox", "input[type=text],input[type=password],input[type=search],input[type=email],input[type=number]" ).each(function () {

        // add ddash property to element
        $( this ).attr( "data-ddash", "textbox" );

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // apply style to this element
        $( this ).css( "border-color", (sc ? second_theme_color : theme_color) );

        // add parent element to textbox
        $( this ).wrap("<div data-ddash='textbox-wrapper' data-ddash-placeholder-shown='true'></div>");



        // check if the element is an input[type=number]
        // if this is the case, add special rules
        if ($( this ).is("input[type=number]")) {

            // function for input type number
            inp_number_transform($( this ));



        }



        // add the second border to the textbox
        // this is in the form of a div,
        //   because standard html doesn't support double borders
        if ( $( this ).is("[data-wdash-prop-accent-border=true]") ) {
            $( this ).parent().append( "<div data-ddash='textbox-second-border' style='background-color: "+(sc ? second_theme_color : theme_color)+"'></div>" );
        }

        // check if the input has a placeholder
        if ($( this ).is("[placeholder]")) {

            // add the placeholder text in a different style
            $( this ).parent().append( "<div data-ddash='textbox-placeholder'><div>" + $( this ).attr("placeholder") + "</div></div>" );

            // remove placeholder attribute so it is not diplsayed by the browser
            $( this ).removeAttr( "placeholder" );

            // make sure that when the placeholder is clicked, the textbox still focuses
            $( this ).parent().find( "[data-ddash=textbox-placeholder]" ).click(function () {
                // focus the input text element that corresponds with the placeholder that was clicked
                $( this ).parent().find( "[data-ddash=textbox]" ).focus();
            });

            // make element easier to use in function
            var a = $( this );
            // when the value of the input text element changes,
            // check if the value is empty or not and choose to diplay placeholder
            $( this ).on( "paste keyup change keydown input", function () {
                if (a.val() === "") {
                    // show placeholder
                    a.parent().attr("data-ddash-placeholder-shown", "true");
                } else {
                    // hide placeholder
                    a.parent().attr("data-ddash-placeholder-shown", "false");
                }
            } );
        }

    });










    // -----
    // large quote
    // -----
    d( "large-quote", "div,span" ).each(function () {
        // add ddash property to element
        $( this ).attr( "data-ddash", "large-quote" );
        // wrap the element in a wrapper to align it in the center
        $( this ).wrap( "<div data-ddash='large-quote-container'></div>" );
        // add a name to the quote if given
        // check if a name is given
        var html = $( this ).html();
        if (html.split("-").length == 2) {
            // name is given correctly
            // remove spaces at the start and end of the content and name
            //   this is for better display later
            var content = remove_unneeded_spaces(html.split("-")[0]);
            var name = remove_unneeded_spaces(html.split("-")[1]);
            // change the html of the large-quote to
            //   contain content and name in the right way
            $( this ).html(
                // content
                "<span data-ddash='large-quote-main-quote'>\“"+content+"\”</span>"+
                // name
                "<span data-ddash='large-quote-name'>- "+name+"</span>"
            );
        } else {
            // name not given or not given correctly
            var content = remove_unneeded_spaces(html);
            $( this ).html(
                // content
                "<span data-ddash='large-quote-main-quote'>\“"+content+"\”</span>"
            );
        }
    });










    // -----
    // inline quote
    // -----
    d( "inline-quote", "span" ).each(function () {
        // add ddash property to element
        $( this ).attr( "data-ddash", "inline-quote" );
        // add a name to the quote if given
        // check if a name is given
        var html = $( this ).html();
        if (html.split("-").length == 2) {
            // name is given correctly
            // remove the spaces at the end and the start of the name and contant of the quote
            //  this is for better display later
            var content = remove_unneeded_spaces(html.split("-")[0]);
            var name = remove_unneeded_spaces(html.split("-")[1]);
            // change the html of the current inline-quote element
            $( this ).html(
                // content
                "<span data-ddash='inline-quote-main-quote'>\“"+content+"\”</span>"+
                // name
                "<span data-ddash='inline-quote-name'>&nbsp;- "+name+"</span>"
            );
        } else {
            // name not given or not given correctly
            var content = remove_unneeded_spaces(html);
            // only change the html of the inline-quote element to show the quote
            $( this ).html(
                // contant
                "<span data-ddash='inline-quote-main-quote'>\“"+content+"\”</span>"
            );
        }
    });










    // -----
    // switches
    // -----
    // replace all dash checkboxes (with data-wdash=switch) with proper styled ones
    d( "switch", "input[type=checkbox]" ).each(function (index) {

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // add ddash property to element
        $( this ).attr( "data-ddash", "switch" );

        // insert the visible switch after the real checkbox that is being used
        $( this ).after( "<div style='background-color: "+(sc ? second_theme_color : theme_color)+";' data-ddash='visible-switch' onclick='wdash_switch_change_prop("+index+")'><div></div></div>" );

        // set the index of the switch to use later when clicking on the element
        $( this ).attr( "data-ddash-switch-index", String(index) );

    });










    // -----
    // checkboxes
    // -----
    // replace default checkboxes (with data-wdash=checkbox added) with proper styled ones
    d( "checkbox", "input[type=checkbox]" ).each(function (index) {

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // add ddash property to element
        $( this ).attr( "data-ddash", "checkbox" );

        // if a width or height is defined, change the width and height of the result object
        // define style to be empty at first
        var style_add = "";

        // check if the size is defined in [data-wdash-prop]
        if (Number($( this ).attr( "data-wdash-prop-size" )) >= 10) {
            var size = $( this ).attr( "data-wdash-prop-size" ) + "px";
            // set the width and height to the gotten height
            style_add = "width: "+size+"; height: "+size+";";
        }

        // insert the visible checkbox after the real checkbox that is being used
        $( this ).after(
            "<div style='"+style_add+" background-color: "+(sc ? second_theme_color : theme_color)+";' data-ddash='visible-checkbox' onclick='wdash_checkbox_change_prop("+index+")'>"+
                "<svg viewbox='0 0 52 52'>"+
                    "<path fill='none' d='M10 29 l8 8 l23 -23' />"+
                "</svg>"+
            "</div>"
        );

        // set the index of the checkbox to use later when clicking on the element
        $( this ).attr( "data-ddash-checkbox-index", String(index) );

    });










    // -----
    // button
    // -----
    d( "button", "input[type=submit],input[type=button],button" ).each(function () {

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // add ddash property to the element
        // to make it accessible from css
        $( this ).attr( "data-ddash", "button" );

        // add the theme color background color
        $( this ).css( "background-color", (sc ? second_theme_color : theme_color) );

    });










    // -----
    // transparent button
    // -----
    d( "transparent-button", "input[type=submit],input[type=button],button" ).each(function () {

        // add ddash property to the element
        // to make it accessible from css
        $( this ).attr( "data-ddash", "transparent-button" );

    });










    // -----
    // loading circle
    // -----
    d( "loading-circle", "div" ).each(function () {

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // add ddash to element
        $( this ).attr( "data-ddash", "loading-circle" );

        // check if the size is defined in [data-wdash-prop]
        if (Number($( this ).attr( "data-wdash-prop-size" )) >= 5) {
            var size = $( this ).attr( "data-wdash-prop-size" ) + "px";
            // set the width and height to the gotten height
            $( this ).css( "width", size );
            $( this ).css( "height", size );
        }

        // add the visible loading circle to the element
        $( this ).html( '<svg viewBox="25 25 50 50" >'+
                            '<circle class="loader-path" cx="50" cy="50" r="20" fill="none" stroke="' + (sc ? second_theme_color : theme_color) + '" />'+
                        '</svg>' );

    });










    // -----
    // title
    // -----
    d( "title", "h1,h2,h3,h4,h5,h6" ).each(function () {

        // add ddash to element
        $( this ).attr( "data-ddash", "title" );

    });










    // -----
    // text
    // -----
    d( "text", "p" ).each(function () {

        // add ddash to element
        $( this ).attr( "data-ddash", "text" );

    });












    // code afterwards
    // > this is the code to run after all elements are placed
    // > these are mostly actions that apply for all wdash or ddash elements

    // set the default font family to all ddash elements
    $( "[data-ddash]" ).css( "font-family", font );




});
