"use strict";
const render = (root)=>{
   root.empty();

   const section = $('<section class="components"> Holi Boli</section>');
   root.append(section);
};

const state = {
   user: null,
   email: null,
   password: null,
   screen: null
};

const update = function (){
 render(root);
};

$( _ => {

  const root = $('#root');
  render(root);

})
