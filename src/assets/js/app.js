"use strict";
const render = (root)=>{
   root.empty();
   const section = $('<div></div>');
   section.append(header( _ => render(root)));

   if (state.page == null) {
    section.append(welcome( _ => render(root)));
  } else if (state.page == 1) {
    section.append(reloj( _ => render(root)));
  } else if (state.page == 2) {
    section.append(asistOk( _ => render(root)));
  }

   root.append(section);
};

const update = function (){
  render(root);
};

const state = {
  data: null,
  user: null,
  email: null,
  password: null,
  page: null,
  time:null,

};

$( _ => {
    getJSON("http://spreadsheets.google.com/feeds/list/1g9WAYhIOSlW3tqpFj1DO-JPeCHrz7Xk59iP6cEIzZxY/od6/public/values?alt=json",(err,json)=> {
        if (err) { return alert(err.message);}

        state.data = json;
        const root = $('.root');
        render(root);
    });
});
