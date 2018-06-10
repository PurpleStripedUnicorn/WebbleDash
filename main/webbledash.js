/*

--- WebbleDash ---
Please use with care, this version may contain bugs
WebbleDash is still in the early stages of development

WebbleDash was made by PurpleStripedUnicorn

*/



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
    d( "textbox", "input[type=text],input[type=password],input[type=search],input[type=email]" ).each(function () {

        // add ddash property to element
        $( this ).attr( "data-ddash", "textbox" );

        // check if second color or main color should be used
        var sc = $( this ).is("[data-wdash-second-color]");

        // apply style to this element
        $( this ).css( "border-color", (sc ? second_theme_color : theme_color) );

        // add parent element to textbox
        $( this ).wrap("<div data-ddash='textbox-wrapper' data-ddash-placeholder-shown='true'></div>");

        // add the second border to the textbox
        // this is in the form of a div,
        //   because standard html doesn't support double borders
        $( this ).parent().append( "<div data-ddash='textbox-second-border' style='background-color: "+(sc ? second_theme_color : theme_color)+"'></div>" );

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
