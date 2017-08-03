'use strict';

const filterByEmail= (stations,query) => {
    console.log(stations);
    const select =stations.filter (function(index) {
    return (index.$t.indexOf(query)!=-1);
    })

    return select;
}
