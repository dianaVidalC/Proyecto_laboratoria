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
   $.getJSON("../../user.json", function (data) {
      state.user = data;



      console.log(state.user);
   });
   var root = $(".root");
   render(root);
});
"use strict";

var welcome = function (update) {
  var searchContainer = $("<div class=\" row searchContainer\"></div>");
  var divcont = $("<div class=\"border-all  col s10 xl10\"></div>");
  var relleno = $("<div class=\"col s1 xl1\"></div>");
  var input = $("<input type=\"text\" class=\"col s9 xl9\" placeholder=\"Ingrese tu direccion a buscar\">");
  var icon = $("<i class=\"col s1 xl1 material-icons search\">search</i>");
  var container_grifos = $("<div class=\" col s12  xl12 bg-white\"></div>");
  divcont.append(icon);
  divcont.append(input);
  searchContainer.append(relleno);
  searchContainer.append(divcont);
  searchContainer.append(container_grifos);

  var filtrados = filterByDistrict(state.stations, "");
  filtrados.forEach(function (index) {
    container_grifos.append(grifosDetail(index, update));
  });

  input.on("keyup", function (e) {
    if (input.val() != "") {
      reRender(container_grifos);
      filtrados = filterByDistrict(state.stations, input.val());
      if (filtrados.length == 0) {
        alert("No existe ningun grifo con ese nombre");
      } else {
        filtrados.forEach(function (index) {
          container_grifos.append(grifosDetail(index, update));
        });
      }
      searchContainer.append(container_grifos);
    } else {
      reRender(container_grifos);
    }
  });
  return searchContainer;
};