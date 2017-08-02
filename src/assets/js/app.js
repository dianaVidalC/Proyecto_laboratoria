"use strict";
const render = (root)=>{
   root.empty();

   const section = $('<section class="components"> Holi Boli</section>');
   root.append(section);
};

const state = {
   user: null,
   email: null,
   password:null,
};

const update = function (){
 render(root);
};

$( _ => {

  getJSON('api/user.json', (err, json) => {

      if (err) { return alert(err.message);}

      state.user = json;

      const root = $('.root');
      render(root);

      console.log("holiboli");
      console.log(state.user);
    });


})
