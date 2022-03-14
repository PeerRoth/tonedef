export const array2grouped = (ara,n) => {
    let tempRowGroups=[];
    let numberOfRows=Math.ceil(ara.length/n);
    for (let g=0;g<numberOfRows;g++){
        tempRowGroups.push([]);
        for (let i=0;i<n;i++){
            console.log((g*n)+i,ara[g+i]);
            if (typeof ara[(g*n)+i]!=='undefined'){
                tempRowGroups[g].push(ara[(g*n)+i]);
            };
        }
    };
    return tempRowGroups;
};