export default function validateQuery(){
  const targetNode = document.getElementById('search-box');
  if(targetNode.value.toLowerCase() === 'all'){return};

  let queryDates = targetNode.value.split('-');

  queryDates = queryDates.map((x) => {
    let tempArr = x.split('/');
    for(let i = 0; i < tempArr.length; i++){
      if(i === 0){tempArr.splice(0, 1, tempArr[i].padStart(4,"20"))};
      if(i <= 1){tempArr.splice(i, 1, tempArr[i].padStart(2,"0"))};
    };
    return tempArr.join('/');
  });

  let formattedDates = queryDates.join('-');
  targetNode.value = formattedDates;
  return formattedDates;
};
