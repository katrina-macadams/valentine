var envelope = $('#envelope');
var btn_open = $("#open");
var btn_reset = $("#reset");

envelope.click(function() {
    open();
});
btn_open.click(function() {
    open();
});
btn_reset.click(function() {
    close();
    console.log("reset");
});

function open() {
    envelope.addClass("open")
        .removeClass("close");
}

function close() {
    envelope.addClass("close")
        .removeClass("open");
    console.log("close");
}