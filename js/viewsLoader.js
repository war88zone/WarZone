// Includers HTML
let deferred_message = $.Deferred();
$(".js_message").load("/view/message.html", function() {
  console.log("message.html loaded");
  deferred_message.resolve();
}); 

/*let deferred_responsive = $.Deferred();
$(".js_responsive").load("/view/responsive.html", function() {
  console.log("responsive.html loaded");
  deferred_responsive.resolve();
});*/

let deferred_exemple = $.Deferred();
$(".js_exemple").load("/view/exemple.html", function() {
  console.log("exemple.html loaded");
  deferred_exemple.resolve();
});

let deferred_process = $.Deferred();
$(".js_process").load("/view/process.html", function() {
  console.log("process.html loaded");
  deferred_process.resolve();
});

