"use strict";
const render = (root)=>{
   root.empty();
   const section = $('<section class="components">Maia Imprime </section>');
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

  $.getJSON('../../user.json',function(data){
    state.user = data;



    console.log(state.user);
  })
  const root = $('.root');
  render(root);
});
