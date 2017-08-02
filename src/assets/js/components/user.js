
const welcome = (update) => {

  const searchContainer = $('<div class=" row searchContainer"></div>');
  const divcont =$('<div class="border-all  col s10 xl10"></div>')
  const relleno =$('<div class="col s1 xl1"></div>')
  const input = $('<input type="text" class="col s9 xl9" placeholder="Ingrese tu direccion a buscar">');
  const icon =$('<i class="col s1 xl1 material-icons search">search</i>')
  const container_grifos =$('<div class=" col s12  xl12 bg-white"></div>')
    divcont.append(icon);
    divcont.append(input);
    searchContainer.append(relleno);
    searchContainer.append(divcont);
    searchContainer.append(container_grifos);

    let filtrados = filterByDistrict(state.stations ,"");
    filtrados.forEach( function( index) {
      container_grifos.append(grifosDetail(index,update));
    });

    input.on('keyup',(e) => {
        if(input.val() !=""){
            reRender(container_grifos);
            filtrados = filterByDistrict(state.stations ,input.val());
            if (filtrados.length == 0) {
              alert("No existe ningun grifo con ese nombre");
            }else {
              filtrados.forEach( function( index) {
                container_grifos.append(grifosDetail(index,update));
              });
             }
            searchContainer.append(container_grifos);
          }else {
            reRender(container_grifos);
          }
    });
  return searchContainer;
}
