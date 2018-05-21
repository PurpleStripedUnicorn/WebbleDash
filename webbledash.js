/*

--- WebbleDash ---
Please use with care, this version may contain bugs
WebbleDash is still in the early stages of development

WebbleDash was made by PurpleStripedUnicorn

*/

// function for searching for wDash elements
function d (name) {
    return $("[data-wdash="+name+"]");
}

// function for removing spaces at the start or at the end of a string
function remove_unneeded_spaces (string) {
    var first_char = string.substr(0,1);
    var last_char = string.substr(-1);
    if (first_char === " ") {
        string = string.substr(1);
    }
    if (last_char === " ") {
        string = string.substr(0, string.length - 1);
    }
    return string;
}



// function for when the document is loaded
$( document ).ready(function () {

    // textboxes
    d("textbox").each(function () {
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





    // large quote
    $(d("large-quote")).each(function () {
        // wrap the element in a wrapper to align it in the center
        $( this ).wrap( "<div data-ddash='large-quote-container'></div>" );
        // add a name to the quote if given
        // check if a name is given
        var html = $( this ).html();
        if (html.split("-").length == 2) {
            // name is given correctly
            var content = remove_unneeded_spaces(html.split("-")[0]);
            var name = remove_unneeded_spaces(html.split("-")[1]);
            $( this ).html(
                "<span data-ddash='large-quote-main-quote'>"+content+"</span>"+
                "<span data-ddash='large-quote-name'>"+name+"</span>"
            );
        } else {
            // name not given or not given correctly
            var content = remove_unneeded_spaces(html);
            $( this ).html(
                "<span data-ddash='large-quote-main-quote'>"+content+"</span>"
            );
        }
    });

});
