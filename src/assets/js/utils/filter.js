'use strict';

const filterByEmail= (stations,query) => {
    console.log(stations.$t);
    const select =stations.filter (function(index) {
    return (index.$t.indexOf(query)!=-1);
    })
    console.log(select);
    return   select;
}
