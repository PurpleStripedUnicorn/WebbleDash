/*

WebbleDash
Please use with care, may contain bugs
Made by PurpleStripedUnicorn

*/

// function for searching for wDash elements
function d (name) {
    return $("[data-wdash="+name+"]");
}
// function for when the document is loaded
$( document ).ready(function () {

    // textboxes
    d("textbox").each(function () {
        $( this ).wrap("<div data-ddash=textbox-wrapper data-ddash-placeholder-shown='true'></div>");
        // check if the input has a placeholder
        if ($( this ).is("[placeholder]")) {
            $( this ).parent().append( "<div data-ddash='textbox-placeholder'>" + $( this ).attr("placeholder") + "</div>" );
            $( this ).removeAttr( "placeholder" );
            $( this ).parent().find( "[data-ddash=textbox-placeholder]" ).click(function () {
                $( this ).parent().find( "input[type=text]" ).focus();
            });
            var a = $( this );
            $( this ).on( "paste keyup change keydown input", function () {
                if ((
                    a.val() === ""
                )) {
                    // show placeholder
                    a.parent().attr("data-ddash-placeholder-shown", "true");
                } else {
                    // hide placeholder
                    a.parent().attr("data-ddash-placeholder-shown", "false");
                }
            } );
        }
    });





    // ...

});
