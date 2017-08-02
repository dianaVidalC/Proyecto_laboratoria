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
      getJSON("api/user.json", function (err, json) {
            if (err) {
                  return alert(err.message);
            }

            state.user = json;

            var root = $(".root");
            render(root);

            console.log("holiboli");
            console.log(state.user);
      });

});
"use strict";

var getJSON = function (url, cb) {
  var xhr = new XMLHttpRequest();

  xhr.addEventListener("load", function () {
    if (xhr.status !== 200) {
      return cb(new Error("Error loading JSON from " + url + "(" + xhr.status + ")"));
    }

    cb(null, xhr.response);
  });

  xhr.open("GET", url);
  xhr.responseType = "json";
  xhr.send();
};