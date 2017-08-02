"use strict";
var render = function (root) {
   root.empty();
   var section = $("<section class=\"components\">Maia Imprime </section>");
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
   // $.getJSON('../../user.json',function(data){
   //   state.user = data;
   //
   //
   //
   //   console.log(state.user);
   // })
   var root = $(".root");
   render(root);
});
