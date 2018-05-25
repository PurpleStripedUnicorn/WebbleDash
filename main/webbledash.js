/*

--- WebbleDash ---
Please use with care, this version may contain bugs
WebbleDash is still in the early stages of development

WebbleDash was made by PurpleStripedUnicorn

*/


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

        console.log($(""+result_elements))

        // return all of the elements with [data-wdash=name] added to them
        return $(""+result_elements+"");

    } else {

        // no elements given, just return
        // return the elements with the property wdash as the name of the input
        return $("[data-wdash="+name+"]");

    }

}

// function to check or uncheck a webbledash checkbox
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
    // textboxes
    // -----
    d("textbox", "input[type=text],input[type=password],input[type=search],input[type=email]").each(function () {
        // add ddash property to element
        $( this ).attr( "data-ddash", "textbox" );
        // add parent element to textbox
        $( this ).wrap("<div data-ddash='textbox-wrapper' data-ddash-placeholder-shown='true'></div>");
        // check if the input has a placeholder
        if ($( this ).is("[placeholder]")) {

            // add the placeholder text in a different style
            $( this ).parent().append( "<div data-ddash='textbox-placeholder'>" + $( this ).attr("placeholder") + "</div>" );

            // remove placeholder attribute so it is not diplsayed by the browser
            $( this ).removeAttr( "placeholder" );

            // make sure that when the placeholder is clicked, the textbox still focuses
            $( this ).parent().find( "[data-ddash=textbox-placeholder]" ).click(function () {
                // focus the input text element that corresponds with the placeholder that was clicked
                $( this ).parent().find( "input[type=text]" ).focus();
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
    $(d("large-quote", "div,span")).each(function () {
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
    $(d("inline-quote", "span")).each(function () {
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
    // replace all dash checkboxes with proper styled ones
    d("switch", "input[type=checkbox]").each(function (index) {
        // add ddash property to element
        $( this ).attr( "data-ddash", "switch" );
        // insert the visible switch after the real checkbox that is being used
        $( this ).after( "<div data-ddash='visible-switch' onclick='wdash_switch_change_prop("+index+")'><div></div></div>" );
        // set the index of the switch to use later when clicking on the element
        $( this ).attr( "data-ddash-switch-index", String(index) );
    });

});
