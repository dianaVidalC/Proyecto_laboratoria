"use strict";
var render = function (root) {
   root.empty();

   var section = $("<section class=\"components\"> Holi Boli</section>");
   root.append(section);
};

var state = {
   user: null,
   email: null,
   password: null };

var update = function () {
   render(root);
};

$(function (_) {
   var root = $("#root");
   render(root);
});